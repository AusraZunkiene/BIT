// Pirma užduotis
class Color {
    
    constructor(red, green, blue) {
        if (this.red >= 0 || this.red <= 255 || this.green >= 0 || this.green <= 255 || this.blue >= 0 || this.blue <= 255) {
            throw new Error('Bad Values');
            
          }
        this.red = red;
        this.green = green;
        this.blue = blue;

      
	}

    get rgb() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
    get hex() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

}


  
    const color = new Color(10, 150, 255);
    console.log(color.rgb);
    console.log(color.hex);

//Antra užduotis

class ColorPalette{



    
    static countArea(height, width) {
		console.log(width * height);
	}
}




