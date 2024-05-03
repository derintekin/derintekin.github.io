function addCourseField() {
    const coursesContainer = document.getElementById('courses-container');
    const newCourseField = document.createElement('input');
    newCourseField.type = 'text';
    newCourseField.className = 'course';
    newCourseField.name = 'courses[]';
    newCourseField.required = true;
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        coursesContainer.removeChild(newCourseField);
        coursesContainer.removeChild(deleteButton);
    };
    coursesContainer.appendChild(newCourseField);
    coursesContainer.appendChild(deleteButton);
}

function resetForm() {
    document.getElementById('intro-form').reset();
}
function loadImage(){
    var image = document.getElementById('image').files[0];
    const imageUrl = URL.createObjectURL(image);
    var text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('loadImage').innerHTML = text;


}


window.onload = function() {
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.onclick = function(event) {
        event.preventDefault();
        const form = document.getElementById('intro-form');
        if (form.checkValidity()) {
            const formData = new FormData(form);
            let formResult = '';
            for (const [key, value] of formData.entries()) {
                formResult += `${key}: ${value}\n`;
            }
            const formResultText = document.createTextNode(formResult);
            form.replaceWith(formResultText);
            const resetLink = document.getElementById('reset-link');
            resetLink.style.display = 'block';
        } else {
            form.reportValidity();
        }
    };
};
