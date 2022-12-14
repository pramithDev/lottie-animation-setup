var animation1 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('screening'), // required
    path: 'assets/lottie-json/selecting.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});

var animation2 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('selecting'), // required
    path: 'assets/lottie-json/choosing.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});

var animation3 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('interviewing'), // required
    path: 'assets/lottie-json/interview.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});

var animation3 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('hiring'), // required
    path: 'assets/lottie-json/hired.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});