function onSubmit(e) {

    e.preventDefault();
  
    // get user input
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
  
    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;
  
    if (prompt === '') {
      alert('Please, write something');
      return;
    }
  
    generateImageRequest(prompt, size);
  }
  
async function generateImageRequest(prompt, size) {
    try {

        // show loading
        showSpinner();

        // send request
        const response = await fetch('/openai/generateimage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt,
            size,
        }),
        });

        // if bad result
        if (!response.ok) {
            removeSpinner();
            throw new Error('That image could not be generated');
        }

        const data = await response.json();
        console.log(data);

        const imageUrl = data.data;

        // show image to user
        document.querySelector('#image').src = imageUrl;

        // cancel loading
        removeSpinner();

    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
    }

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

// add listener on button click
document.querySelector('#image-form').addEventListener('submit', onSubmit);