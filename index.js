const fs = require('fs');

const fileName = process.argv[2];


// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');

    // Convert data to integer array
    const list = data.split(" ").map(element => parseInt(element, 10));
    

    // Bubble Sort
    bubbleSort(list);

    // Insertion Sort 
    insertionSort(list);

    // Selection Sort
    selectionSort(list);

    //  Quick Sort
    console.log(`Tri rapide: ${numberOfComparisons} comparaisons - `, quickSort(list))

} catch (error) {
    console.error(error.message);
}




// Bubble Sort
function bubbleSort(items) {
    var length = items.length; 
    let numberOfComparisons = 0; 
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) { 
            numberOfComparisons +=1;
            if(items[j] > items[j+1]) {
                var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
    return console.log(`Tri à bulle: ${numberOfComparisons} comparaisons - `, items);
}

// Insertion Sort 
function insertionSort(arr) {
    let numberOfComparisons = 0;
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      numberOfComparisons +=1;
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return console.log(`Tri par insertion: ${numberOfComparisons} comparaisons - `, arr);
}

// Sort by selection
function selectionSort(tab){
    let numberOfComparisons = 0;
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        numberOfComparisons +=1;
        if(tab[j] < tab[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return console.log(`Tri par séléction: ${numberOfComparisons} comparaisons - `, tab);
};

// Quick Sort
var numberOfComparisons = 0;
function quickSort(arr){
    
    if(arr.length<=1) {
        return arr;
    }
    let pivotIndex=Math.floor(arr.length/2);
    let pivot=arr.splice(pivotIndex,1)[0];
    let left=[],right=[];
    for(let i=0;i<arr.length;i++){
        numberOfComparisons += 1;
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}