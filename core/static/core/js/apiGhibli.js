$(document).ready(function(){
    //$('#api1').click(initiate_ghibliapi);
    initiate_ghibliapi();
});

function crearCard(id, img, titulo, descripcion){
    var card = "<div class = 'card'>"+
    "<img id= '" + id + "'src='" + img + "'class = 'card-img-top' alt='" + titulo +"' ><div class ='card-body'>" +
    "<h5 class= 'card-title'>" + titulo + "</h5>" + 
    "<p class='card-text'>" + descripcion + "</p></div></div>"

    return card
}

function initiate_ghibliapi(){
        $.get({
            url: 'https://ghibliapi.herokuapp.com/films', //DIRECCIÓN SERVER
            success: function(listado) {  
            console.log(listado);
            
                var contenedor = $('#listado')
                    contenedor.empty();

            var imagen;

            $.each(listado, function (index, pelicula){
                
              //If para insertar las imagenes según el título de la película   <<--------------------------------------------------------

                /* if (pelicula.title == "Castle in the Sky"){
                    imagen = 'Imagenes/apiGhibli/castleinthesky.jpg';

                    } else if (pelicula.title == "Grave of the Fireflies"){
                        imagen = 'Imagenes/apiGhibli/graveofthefireflies.jpg';
                    
                    } else if (pelicula.title == "My Neighbor Totoro"){
                        imagen = 'Imagenes/apiGhibli/totoro.jpg';
                    
                    } else if (pelicula.title == "Kiki's Delivery Service"){
                        imagen = 'Imagenes/apiGhibli/kikidelivery.jpg';
                    
                    } else if (pelicula.title == "Only Yesterday"){
                        imagen = 'Imagenes/apiGhibli/onlyyesterday.jpg';
                    
                    } else if (pelicula.title == "Porco Rosso"){
                        imagen = 'Imagenes/apiGhibli/porcorosso.jpg';
                    
                    } else if (pelicula.title == "Pom Poko"){
                        imagen = 'Imagenes/apiGhibli/pompoko.jpg';

                    } else if (pelicula.title == "Whisper of the Heart"){
                        imagen = 'Imagenes/apiGhibli/whisperoftheheart.jpg';

                    } else if (pelicula.title == "Princess Mononoke"){
                        imagen = 'Imagenes/apiGhibli/mononoke.jpg';
                    
                    } else if (pelicula.title == "My Neighbors the Yamadas"){
                        imagen = 'Imagenes/apiGhibli/theyamadas.jpg';
                    
                    } else if (pelicula.title == "Spirited Away"){
                        imagen = 'Imagenes/apiGhibli/chihiro.jpg';
                    
                    } else if (pelicula.title == "The Cat Returns"){
                        imagen = 'Imagenes/apiGhibli/catreturns.jpg';

                    } else if (pelicula.title == "Howl's Moving Castle"){
                        imagen = 'Imagenes/apiGhibli/movingcastle.jpg';
                    
                    } else if (pelicula.title == "Tales from Earthsea"){
                        imagen = 'Imagenes/apiGhibli/talesfromearthsea.jpg';
                    
                    } else if (pelicula.title == "Ponyo"){
                        imagen = 'Imagenes/apiGhibli/ponyo.jpg';

                    } else if (pelicula.title == "Arrietty"){
                        imagen = 'Imagenes/apiGhibli/arrietty.jpg';

                    } else if (pelicula.title == "From Up on Poppy Hill"){
                        imagen = 'Imagenes/apiGhibli/poppyhill.jpg';
                    
                    } else if (pelicula.title == "The Wind Rises"){
                        imagen = 'Imagenes/apiGhibli/thewindrises.jpg';
                    
                    } else if (pelicula.title == "The Tale of the Princess Kaguya"){
                        imagen = 'Imagenes/apiGhibli/princesskaguya.jpg';
                    
                    } else if (pelicula.title == "When Marnie Was There"){
                        imagen = 'Imagenes/apiGhibli/whenmarnie.jpg';
                    
                    } else if (pelicula.title == "The Red Turtle"){
                        imagen = 'Imagenes/apiGhibli/redturtle.jpg';

                }else{
                    imagen = 'Imagenes/apiGhibli/sin-imagen.jpg';
                } */

                //Fin If <<-----------------------------------------------

              //Switch case con la misma funcion del If anterior   <<----------------------------------------------------------------

                switch (pelicula.title) {
                    case "Castle in the Sky":
                        imagen = 'https://i.ibb.co/bLn2tpY/71-HLi-MMNe-L.jpg';
                      break;

                    case "Grave of the Fireflies":
                        imagen = 'https://flxt.tmsimg.com/assets/p158931_p_v10_aa.jpg';
                      break;

                    case "My Neighbor Totoro":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/02ef2b75bf6c39dec48c636c8dc9d0e4252601800eec9e15c8a266fc46150b00._RI_V_TTW_.jpg';
                      break;

                    case "Kiki's Delivery Service":
                        imagen = 'https://musicart.xboxlive.com/7/9f355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080';
                      break;

                    case "Only Yesterday":
                        imagen = 'https://pics.filmaffinity.com/Recuerdos_del_ayer-994657393-large.jpg';
                      break;

                    case "Porco Rosso":
                        imagen = 'https://static.wikia.nocookie.net/doblaje/images/1/1d/Porco_Rosso_Portada.jpg/revision/latest?cb=20200301112423&path-prefix=es';
                      break;

                    case "Pom Poko":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/I/81YM5Y4DFhL._SL1500_.jpg';
                      break;

                    case "Whisper of the Heart":
                        imagen = 'https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
                      break;
                    
                    case "Princess Mononoke":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/I/91c7thBOWKL._SL1500_.jpg';
                      break;
                    
                    case "My Neighbors the Yamadas":
                        imagen = 'https://m.media-amazon.com/images/M/MV5BNzgwODZkMmYtMTBhNi00OWU1LThjNjYtMmJlY2QxNjNlZDNiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
                      break;
                    
                    case "Spirited Away":
                        imagen = 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
                      break;
                    
                    case  "The Cat Returns":
                        imagen = 'https://m.media-amazon.com/images/M/MV5BYThhZDdiMjItYzRkNy00OTE3LTk5ZDEtMzUwNzE1ZmJkMTYzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
                      break;
                    
                    case "Howl's Moving Castle":
                        imagen = 'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
                      break;
                    
                    case "Tales from Earthsea":
                        imagen = 'https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR87,0,630,1200_AL_.jpg';
                      break;
                    
                    case "Ponyo":
                        imagen = 'https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fpeliculas%2F000%2F026%2F260%2Fponyo-en-el-acantilado-1.jpg&nuevoancho=690&medio=abc';
                      break;
                    
                    case "Arrietty":
                        imagen = 'https://media.redadn.es/series/p/arrietty-y-el-mundo-de-los-diminutos_2423.jpg';
                      break;
                    
                    case "From Up on Poppy Hill":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/I/81JVKziDNAL._SL1500_.jpg';
                      break;
                    
                    case "The Wind Rises":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/I/715RCCBuZEL.jpg';
                      break;

                    case "The Tale of the Princess Kaguya":
                        imagen = 'https://badmoviemarathon.files.wordpress.com/2015/07/05-02-2015_the-tale-of-princes-kaguya_official-poster.jpg';
                      break;
                    
                    case "When Marnie Was There":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/I/91Sruo1eOpL._AC_SL1500_.jpg';
                      break;
                    
                    case "The Red Turtle":
                        imagen = 'https://images-na.ssl-images-amazon.com/images/I/812QLVoHcuL._SL1500_.jpg';
                      break;

                    default: pelicula.title = ""
                          imagen = 'https://londoninstitute.edu.uy/themes/disuy/assets/img/none.png';
                    break;
                    
                }

                //Fin Switch case <<----------------------------------------------------


                var movie = "<b>Director: </b>" + pelicula.director
                    movie += "<br/><b>Título original: </b>" + pelicula.original_title
                    movie += "<br/><b>Título romanizado: </b>" + pelicula.original_title_romanised
                    movie += "<br/><b>Descripción: </b>" + pelicula.description

                    contenedor.append(
                        crearCard(pelicula.id, imagen, pelicula.title, movie)              
                       );
                       
                })
            

            },
            error: function(e) {
                console.error(e)

            }
        
        });
    }
