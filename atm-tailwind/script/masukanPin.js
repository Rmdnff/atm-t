const pin = document.getElementById('pin')

function klik() { 
  if(pin.value.length > 0 ){
    if (pin.value == ('123456')) {
      location.href = "nominal.html"
    } else {
      alert('Pin yang anda masukan salah')
    }
    
  } else{
    alert('Pin tidak boleh kosong')
  }
}
