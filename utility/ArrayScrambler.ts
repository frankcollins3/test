import Random from 'utility/Randomizer'
import APIcall from 'utility/APIcall'

export default async function Scrambler (array) {

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
      let newarray = await shuffle(array);            
      return newarray

}