const formData = {
    email: "",
    message: ""
  };

const form = document.querySelector('.feedback-form');

function saveFormData() {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.elements.email.value = parsedData.email;
      form.elements.message.value = parsedData.message;
      formData.email = parsedData.email;
      formData.message = parsedData.message;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    
    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');
    
    formData.email = "";
    formData.message = "";
    
    form.reset();
}

form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', loadFormData);