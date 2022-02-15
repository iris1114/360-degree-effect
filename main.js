
(() => {
    const rangeBar = document.querySelector(".range_bar");
    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext("2d");
    const images = [];

    const loadImages = () => {
        for(let i = 1; i <=36; i++){
            const number = ("0" + i).slice(-2);
            const url = `https://images.stockx.com/360/Nike-Dunk-Low-Purple-Pulse-W/Images/Nike-Dunk-Low-Purple-Pulse-W/Lv2/img${number}.jpg?auto=compress&w=1118&q=90&dpr=1&updated_at=1635780405`;
            const image = new Image();
            image.src = url;

            image.addEventListener("load", () => {
                images[i] = image;
                if(i === 1){
                    drawImage(i);
                }
            })
        } 
    }

    const drawImage = (index) => {
        ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height); 
    }

    rangeBar.addEventListener("input", (e) => {
        const index = e.target.value;
        drawImage(index);
    })

    window.addEventListener("load", loadImages);

})()




 

