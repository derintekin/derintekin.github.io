document.addEventListener("DOMContentLoaded", function() {
    loadNavItems('json/header.json'); // Assuming you have this function from before, adjusted JSON path as needed
    loadFooter('json/footer.json');    // Adjusted JSON path as needed

    function loadNavItems(jsonFile) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                appendLinks(data.mainNav, document.getElementById('nav-main'));
                appendLinks(data.secondNav, document.getElementById('second-nav'));
            })
            .catch(error => console.error("Failed to load navigation data:", error));
    }

    function appendLinks(items, container) {
        items.forEach(item => {
            const link = document.createElement("a");
            link.textContent = item.name;
            link.href = item.url;
            container.appendChild(link);
            container.appendChild(document.createTextNode(" || "));
        });
        if (container.lastChild.nodeValue === " || ") {
            container.removeChild(container.lastChild);
        }
    }

    function loadFooter(jsonFile) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                const footerContainer = document.getElementById('footer-container');

                data.links.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.textContent = link.name;
                    footerContainer.appendChild(a);
                    footerContainer.appendChild(document.createTextNode(" || "));
                });

                const description = document.createElement('p');
                description.innerHTML = data.description; 
                footerContainer.appendChild(description);

                data.validationTools.forEach(tool => {
                    const a = document.createElement('a');
                    a.href = tool.url;
                    const img = document.createElement('img');
                    img.src = tool.img;
                    img.alt = tool.alt;
                    img.style = "border:0;width:88px;height:31px";
                    a.appendChild(img);
                    footerContainer.appendChild(a);
                });

                data.actions.forEach(action => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.textContent = action.label;
                    button.onclick = new Function(action.action);
                    footerContainer.appendChild(button);
                });
            })
            .catch(error => console.error("Error loading footer data:", error));
    }
});
