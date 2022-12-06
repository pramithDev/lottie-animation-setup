var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('icon-container'), // required
    path: 'assets/data.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});