img = new SimpleImage("img/calcada.jpg");

//Abaixo ultilizamos a estrtura de repetição for para que realize as instruções que constam dentro da chave para todos os pixel da imagem.
for( pixel: img ){

// Abaixo tiramos a media do padrão RGB da imagem para para chegarmos em um valor ideal para aplicação na estrtura IF

    media=( pixel.getRed()+pixel.getGreen()+pixel.getBlue() ) / 3;
    
// Abaixo na estrutura IF estou dizendo ao PC: Se pixel vermelho for mairo que o verde e maior que a media dos 3 devera o PC executar as instruções que estão dentro das chaves.
 
if( pixel.getRed() >media&&pixel.getGreen() >media ){
pixel.setRed( media);
pixel.setGreen( media );
pixel.setBlue( media);
}
}       

print( img );
