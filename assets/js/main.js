$(function() {
    $.ajax({ 
		url: 'https://mobile.cuponatic.com/api2/descuentos/menu/salon-de-belleza/?mobile=true&ciudad=2&page=1',
		type: 'GET',
		dataType: 'JSON',
		crossDomain: true,
		data: {'limit': '3'}
	})
    .done(function(res) {
            console.log('success');
            //console.log('RES', res);
            res.forEach(function(mostrar) {
                //console.log('ejalé', mostrar.imagen);
                	$("#cuponaticContainer").append(`
                			<div class="tarjeta">
												<div class="imgCont">
													<img class="img" src=${mostrar.imagen}>
												</div>
												<div class="titulo">
													<p>${mostrar.titulo}</p>
												</div>
												<div class="contenido">
													<div class="grupo1">
														<div class="circulo">
															${mostrar.porcentaje_descuento}%
														</div> 
														<div class="precios">
															<div class="precioActual">
																${mostrar.valor_oferta}
															</div>
															<div class="precioAntiguo">
																${mostrar.valor_original}
															</div>
														</div>
													</div>	
													<div class="grupo2">
														<div class="vendidos">
															${mostrar.vendidos}
														</div>
													</div>
												</div>
											</div>
											`);
            });
        })
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	});
