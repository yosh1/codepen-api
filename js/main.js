  var urls = [
            "https://codepen.io/bullerb/pen/BzKzvK",
            "https://codepen.io/V17h3m/pen/LZZKJm",
            "https://codepen.io/noeldelgado/pen/oLxYQp",
            "https://codepen.io/chrisgannon/pen/pbbBpd",
        ]
        var script = document.createElement('script');
        var rnd = Math.floor(Math.random() * urls.length);
        var div = document.getElementById('stage');
        var info = document.getElementById('info');

        script.src = "https://codepen.io/api/oembed/?url=" + urls[rnd] + "&format=js&callback=jsonData";
        document.body.appendChild(script);
        document.body.removeChild(script);

        function jsonData(data) {
            div.innerHTML = data.html;
            info.innerHTML = "Developed by " + "<a href='" + data.author_url + "' target='_blank'>" + data.author_name + "</a>" +
                "　Title: " + data.title + "　Ver." + data.version;
        }
