$("document").ready(function(){
    $("#choices").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
    
        var form = $(this);
    
        $.ajax({
               type: "POST",
               url: "/",
               data: form.serialize(), // serializes the form's elements.
               success: function(graphJSON)
               {
                var graphs = {{graphJSON | safe}};
                var layout = {
                 scene:{
                     aspectmode: "manual",
                     aspectratio: {x: 1,y: 0.75,z: 0.1},
                     xaxis: {nticks: 10, range: [70, 87]},
                     zaxis: {nticks: 5},
                     yaxis: {range: [5, 20]},
                     camera: {eye: {x: 0.28, y: -0.08,z: 0.15}},
                    },
                    coloraxis:{colorscale: "portland"}
                };
               
                Plotly.newPlot('chart',graphs,layout);
               }
             });
    
    
    });
}