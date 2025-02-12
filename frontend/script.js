const dropZone = document.getElementById('drop-zone');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('preview');
const generateBtn = document.getElementById('generate-btn');
const captionResult = document.getElementById('caption-result');
const captionText = document.getElementById('caption-text');
const loadingSpinner = document.getElementById('loading-spinner');

let selectedFile = null;

// File Selection Handlers
imageInput.addEventListener('change', (e) => {
  selectedFile = e.target.files[0];
  previewImage(selectedFile);
});

// Drag-and-Drop Handlers
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.borderColor = '#6366f1';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.borderColor = '#e5e7eb';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  selectedFile = e.dataTransfer.files[0];
  previewImage(selectedFile);
  dropZone.style.borderColor = '#e5e7eb';
});

// Image Preview
function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    preview.src = e.target.result;
    preview.style.display = 'block';
    generateBtn.disabled = false;
  };
  reader.readAsDataURL(file);
}

// Generate Caption
generateBtn.addEventListener('click', async () => {
  if (!selectedFile) return;

  // Show loading state
  loadingSpinner.style.display = 'block';
  captionResult.classList.remove('visible');
  captionText.textContent = '';

  const formData = new FormData();
  formData.append('image', selectedFile);

  try {
    const response = await axios.post('https://captiongenerator-backend-2.onrender.com', formData);
    captionText.textContent = response.data.caption;
    captionResult.classList.add('visible');
  } catch (error) {
    captionText.textContent = "Oops! Couldn't generate caption. Please try again.";
    captionResult.classList.add('visible');
  } finally {
    loadingSpinner.style.display = 'none';
  }
});

// Copy to Clipboard
function copyCaption() {
  navigator.clipboard.writeText(captionText.textContent);
}

// Social Sharing (placeholder - implement actual API calls)
function shareTo(platform) {
  const text = encodeURIComponent(captionText.textContent);
  let url = '';
  
  switch(platform) {
    case 'instagram':
      url = `https://www.instagram.com/create/story?text=${text}`;
      break;
    case 'twitter':
      url = `https://twitter.com/intent/tweet?text=${text}`;
      break;
  }
  
  window.open(url, '_blank');
}

// Click Browse
document.querySelector('.browse-link').addEventListener('click', () => {
  imageInput.click();
});