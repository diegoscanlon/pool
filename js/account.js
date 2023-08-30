function redirectToPlanPage() {
    window.location.href = "plan.html";
}

function showCancellationForm() {
    document.getElementById("cancellation-form").style.display = "block";
    document.getElementById("feedback-form").style.display = "none";
}

function cancelTrip() {
    const reason = document.getElementById("cancellation-reason").value;
    alert("Your trip has been canceled. Reason: " + reason);
}

function showFeedbackForm() {
    document.getElementById("feedback-form").style.display = "block";
    document.getElementById("cancellation-form").style.display = "none";
}

function submitFeedback() {
    const feedback = document.getElementById("feedback-message").value;
    alert("Thank you for your feedback:\n" + feedback);
}