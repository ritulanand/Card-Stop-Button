
let questionRotationInterval;

function fetchRandomQuestion() {
    fetch("https://the-trivia-api.com/api/questions?limit=1")
        .then(response => response.json())
        .then(data => {
            const question = data[0].question;
            document.querySelector('.question').innerHTML = question;
        })
        .catch(error => console.error('Error fetching question:', error));
}



function startQuestionRotation() {
     fetchRandomQuestion();
     questionRotationInterval = setInterval(fetchRandomQuestion, 5000);     
   
}


function stopQuestions() {
     clearInterval(questionRotationInterval);

     const stopButton = document.querySelector('.stop-button');
     stopButton.classList.add('stopped');  // Apply the 'stopped' class to change the button's appearance
     stopButton.disabled = true;  // Disable the stop button
 
     // Change the question text to indicate rotation has stopped
     document.querySelector('.question').innerHTML = "Questions stopped.";
    
}

document.addEventListener('DOMContentLoaded', function() {
    // Add necessary event listeners here
        const stopButton = document.querySelector('.stop-button');
        startQuestionRotation();
        
    
        // Add event listener for stop button
        stopButton.addEventListener('click', stopQuestions);
    
});
