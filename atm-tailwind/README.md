## tutorial kuwan 
kasih id di input 
kemudian getElementById di js id input
kemudian bikin variabel saldo dengan sisa saldo 5000000
selanjutnya bikin function kemudian panggil function di button enter 

bikin logika di dalam function 

jika input.value.length < 0 {
  alert("Masukan nominal")
}else{
  jika saldo lebih besar dari input.value {
    jika input.value modulus 50000 == 0 {
      location.href = "ambilKartu.html"
      alert("...")
    }else{
      alert("Masukan nominal yang benar")
    }
  }else{
    alert("Saldo tidak mencukupi")
  }
}