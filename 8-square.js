const size = parseInt(process.argv[2]);


if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (i=0; i<size; i++) {
        let row =''
        for (j=0; j<size; j++){
            row += "X"        
        }
        console.log(row)
    }
}