document.addEventListener("DOMContentLoaded", function () {
    loadNavItems('json/header.json');
    loadFooter('json/footer.json');

    function loadNavItems(jsonFile) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                appendLinks(data.mainNav, document.getElementById('nav-main'));
                appendLinks(data.secondNav, document.getElementById('second-nav'));
            })
            .catch(error => console.error("Failed to load navigation data:", error));
    }

    function loadFooter() {
        fetch('json/footer.json')  // Assuming your JSON file is stored in the 'data' directory
            .then(response => response.json())
            .then(data => {
                const footerContainer = document.getElementById('footer-container');

                // Process links and certifications
                data.links.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.textContent = link.name;
                    footerContainer.appendChild(a);
                    footerContainer.appendChild(document.createTextNode(" || "));

                    if (link.certifications) {
                        const p = document.createElement('p');
                        p.innerHTML = link.description; // using innerHTML to include HTML entities like ©
                        footerContainer.appendChild(p);

                        link.certifications.forEach(cert => {
                            const certLink = document.createElement('a');
                            certLink.href = cert.url;
                            certLink.textContent = cert.name;
                            footerContainer.appendChild(certLink);
                            footerContainer.appendChild(document.createTextNode(" || "));
                        });
                    }
                });

                // Process validation tools
                data.validationTools.forEach(tool => {
                    const toolLink = document.createElement('a');
                    toolLink.href = tool.url;
                    const img = document.createElement('img');
                    img.src = tool.img;
                    img.alt = tool.alt;
                    img.style.border = "0";
                    img.style.width = "88px";
                    img.style.height = "31px";
                    toolLink.appendChild(img);
                    footerContainer.appendChild(toolLink);
                    footerContainer.appendChild(document.createTextNode(" || "));
                });

                // Process actions
                data.actions.forEach(action => {
                    const button = document.createElement('button');
                    button.textContent = action.label;
                    button.onclick = () => eval(action.action); // Use eval to run the action code
                    footerContainer.appendChild(button);
                });

                // Optionally remove the last separator for aesthetics
                if (footerContainer.lastChild.nodeValue === " || ") {
                    footerContainer.removeChild(footerContainer.lastChild);
                }
            })
            .catch(error => console.error("Error loading footer data:", error));
    }
});
function appendLinks(items, container) {
    items.forEach(item => {
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        container.appendChild(link);
        container.appendChild(document.createTextNode(" || "));
    });
    // Optionally remove the last separator
    if (container.lastChild.nodeValue === " || ") {
        container.removeChild(container.lastChild);
    }
}

