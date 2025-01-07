function createSubtractionLine() {
    const pictureVisualDiv = document.getElementById("pictureVisual");

    //create numberline of entire container length
    const subtractionContainer = document.createElement("div");
        subtractionContainer.id = "subtractionContainer";
        const subArrowContainer = document.createElement("div");
        subArrowContainer.id= "subArrowContainer";
        const subNumberLineDiv = document.createElement("div");
        subNumberLineDiv.id = "subNumberLineDiv";        
        const subHorizontalLine = document.createElement("div");
        subHorizontalLine.classList.add("subHorizontalLine");
        subNumberLineDiv.appendChild(subHorizontalLine);
        subtractionContainer.appendChild(subArrowContainer);
        subtractionContainer.appendChild(subNumberLineDiv);
        pictureVisualDiv.appendChild(subtractionContainer);

        //place numA at end of numberline
        const endVerticalContainer = document.createElement("div");
        endVerticalContainer.classList.add("endVerticalContainer");
        const endVerticalLine = document.createElement("div");
        endVerticalLine.classList.add("verticalLine");
        const endNumber = document.createElement("div")
        endNumber.classList.add("countDisplay");
        endNumber.innerHTML= numA;
        endVerticalContainer.appendChild(endVerticalLine);
        endVerticalContainer.appendChild(endNumber);
        subHorizontalLine.appendChild(endVerticalContainer);
}
window.createSubtractionLine = createSubtractionLine;