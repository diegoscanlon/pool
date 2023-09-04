function redirectToPlanPage() {
    window.location.href = "plan.html";
}

function showCancellationForm() {
    document.getElementById("cancellation-form").style.display = "block";
    document.getElementById("feedback-form").style.display = "none";
    document.getElementById("new-match-form").style.display = "none";
    document.getElementById("report-form").style.display = "none";
}

function cancelTrip() {
    const cancel = document.getElementById("cancellation-reason").value;
    alert("Your trip has been canceled. Reason: " + cancel);
}

function showFeedbackForm() {
    document.getElementById("feedback-form").style.display = "block";
    document.getElementById("cancellation-form").style.display = "none";
    document.getElementById("new-match-form").style.display = "none";
    document.getElementById("report-form").style.display = "none";
}

function submitFeedback() {
    const feedback = document.getElementById("feedback-message").value;
    alert("Thank you for your feedback:\n" + feedback);
}

function showNewMatchForm() {
    document.getElementById("feedback-form").style.display = "none";
    document.getElementById("cancellation-form").style.display = "none";
    document.getElementById("new-match-form").style.display = "block";
    document.getElementById("report-form").style.display = "none";
}

function newMatch() {
    const newReason = document.getElementById("new-match-reason").value;
    alert("We're finding you a new match! Sit tight!\n");
}

function showReportForm() {
    document.getElementById("feedback-form").style.display = "none";
    document.getElementById("cancellation-form").style.display = "none";
    document.getElementById("new-match-form").style.display = "none";
    document.getElementById("report-form").style.display = "block";
}

function submitReport() {
    const newReason = document.getElementById("report-reason").value;
    alert("Thank you for reporting. We're taking immediate action and will reach out for more details.\n");
}