const formData = {
    email: '',
    message: '',
  };
  
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  const STORAGE_KEY = 'feedback-form-state';
  
  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };
  
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      return JSON.parse(savedData);
    }
    return null;
  };
  
  const updateFormData = (event) => {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
  };
  
  form.addEventListener('input', updateFormData);
  
  const initializeForm = () => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      formData.email = savedData.email;
      formData.message = savedData.message;
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  };
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log(formData);
    
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(STORAGE_KEY);
  });
  
  initializeForm();
  