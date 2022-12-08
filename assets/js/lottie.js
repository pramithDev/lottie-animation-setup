var animation1 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('frame1'), // required
    path: 'assets/data1.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});

var animation2 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('frame2'), // required
    path: 'assets/data2.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Home Animation", // optional
});