// init controller
        var controller = new ScrollMagic.Controller();


        // Animación de los engranes
        // build tween
        var ingredientestxt = new TimelineMax();
            ingredientestxt.from('#ingredientesTitle', .75, {
                x: -400,
                ease: Circ.easeOut,
                autoAlpha: 0
            })
            .from('#img-huerto',0.5,{
                y: -200,
                ease: Circ.easeOut,
                autoAlpha: 0
            })
            .from('#txt-huerto',0.5,{
                y: 200,
                ease: Circ.easeOut,
                autoAlpha: 0
            });
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#startingredientes",
            //duration: "150%",
            offset: -10
        });
            scene.setTween(ingredientestxt) // trigger a TweenMax.to tween
                //.addIndicators({name: "ingredientes"}) // add indicators (requires plugin)
                .addTo(controller);


        var menu = new TimelineMax();
            menu.from('#menu-page', .5, {
                backgroundPositionX: -100,
                ease: Power2.easeOut,
                autoAlpha: 0})
            .from('#menu-pablo', 0.75, {
                x:-200,
                ease: Circ.easeOut,
                autoAlpha: 0})
            .from('#menu-title', 0.5, {
                x:200,
                ease: Circ.easeOut,
                autoAlpha: 0})
            .from('#menu-txt', 0.75, {
                x:200,
                ease: Circ.easeOut,
                autoAlpha: 0}, 0.3);

        var scene2 = new ScrollMagic.Scene({
            triggerElement: "#starmenu",
            //duration: "150%",
            offset: -10
        });
            scene2.setTween(menu) // trigger a TweenMax.to tween
                //.addIndicators({name: "menu"}) // add indicators (requires plugin)
                .addTo(controller);


        var cartas = new TimelineMax();
            cartas.from('#plato-azul', 0.75, {
                y:200,
                ease: Circ.easeOut,
                autoAlpha: 0})
            .from('.slide-desayunos', 0.75, {
                x:300,
                ease: Circ.easeOut,
                autoAlpha: 0})
            .from('.slide-degustacion', 0.75, {
                x:300,
                ease: Circ.easeOut,
                autoAlpha: 0})
            .from('.slide-carta', 0.75, {
                x:300,
                ease: Circ.easeOut,
                autoAlpha: 0});

        var scene3 = new ScrollMagic.Scene({
            triggerElement: "#startcartas",
            //duration: "150%",
            offset: -10
        });
            scene3.setTween(cartas) // trigger a TweenMax.to tween
                //.addIndicators({name: "cartas"}) // add indicators (requires plugin)
                .addTo(controller);


