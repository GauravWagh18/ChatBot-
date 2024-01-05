function talk(){
    var know = {
    "Who are you" : "Hello, Gaurav_Wagh here ",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 100 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "National Anthem" : "Jan-Gan-Man",
    "National Bird" : "Peacock",
    "National Animal" : "Tiger",
    "National Flower" : "Lotus",
    "National Leader" : "Narendra Modi",
    "National Capital" : "Delhi",
    "National Bank" : "Reserve Bank of India",
    "Biggest State of India" : "Rajasthan"
    
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }