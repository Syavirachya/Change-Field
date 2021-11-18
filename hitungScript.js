function hitung(){
        //untuk menyimpan nilai dlm textarea
        let input = document.getElementById("input_user").value;
        

        //Mengitung Jumlah Huruf
        let jumlah_huruf = input.trim().split(' ').join('').length;
        document.wordcount.huruf.value=jumlah_huruf;

        //menghitung Jumlah Kata
        let formcontent=document.wordcount.input_user.value; 
        isi=formcontent.split(" ");
        document.wordcount.words.value=isi.length;

        //Menghitung Jumlah Huruf Vokal
        const vowels = ["a", "u", "e", "i", "o", "A", "I", "U", "E", "O"];
        let ctr=0;

        for(let i in input){
            if(vowels.includes(input[i])){
                ctr ++;
            }
        }
        document.wordcount.vowel.value=ctr;

        //Mengubah Huruf Vokal Menjadi Angka Secara Berurutan
        let vowel_change = 0;
        let change_;
        let Angka = [];
        for(let i in input){
            if(vowels.includes(input[i])){
                vowel_change ++;
               change_ = input[i].replace(input[i], vowel_change.toString());
                Angka.push(change_);
            }
            else{
                Angka.push(input[i]);
            }
        }
       document.wordcount.changeangka.value=Angka.join("");

        //Mengubah Huruf Vokal Menjadi Bilangan Fibonannci
        let fibonannci1 = 0;
        let fibonannci2 = 1;
        let x;
        let fibonacci;
        let final = [];
        for(let i in input){
            if(vowels.includes(input[i])){
               x = fibonannci1 + fibonannci2;
               
                fibonacci = input[i].replace(input[i], fibonannci1.toString());
                final.push(fibonacci);
                fibonannci1 =fibonannci2;
                fibonannci2 = x;
            }
            else{
                final.push(input[i]);
            }
        }
        document.wordcount.change_fibonannci.value=final.join("");
        
        //Mengubah Huruf Tengah Menjadi Tanda Bintang (*)
        let a = input.split(" ");
        let b;
        let bintang = [];
        for(let i in a){
            for(c in a[i]){
                b = a[i].length;
                if(c == 0 || c == (b-1)){
                    bintang.push(a[i][c]);
                }
                else{
                    bintang.push("*");
                }
            }
            bintang.push(" ");
        }
        document.wordcount.hasil6.value=bintang.join("");
       
       
    }
