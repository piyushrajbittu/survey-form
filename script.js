document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.getElementById("rating").value;
  
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Feedback:", feedback);
    console.log("Rating:", rating);
  
    alert("Survey submitted successfully!");
});
  