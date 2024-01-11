let dragElement;

const allDraggableElements = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.dropzone');

for(const element of allDraggableElements)
{
    element.addEventListener("dragstart", (event)=>{
        dragElement = event.target;
    });
}

for(const dropZone of dropZones)
{
    dropZone.addEventListener("dragover", (event)=>{
        event.preventDefault();
    })
    dropZone.addEventListener("dragenter", (event)=>{
        if(event.target.classList.contains("dropzone")){
            event.target.classList.add("dragover");
        }
    });
    dropZone.addEventListener("dragleave", (event)=>{
        if(event.target.classList.contains("dropzone")){
            event.target.classList.remove("dragover");
        }
    });
    dropZone.addEventListener("drop", (event)=>{
        event.preventDefault();
        if(event.target.classList.contains("dropzone")){
            event.target.classList.remove("dragover");
            event.target.appendChild(dragElement)
        }
    });

}

