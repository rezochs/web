<script type="text/javascript">
            var bodyBgs = [];
            bodyBgs[0] = "/assets/images/1.png";
            bodyBgs[1] = "/assets/images/2.png";
            bodyBgs[2] = "/assets/images/3.png";
            bodyBgs[3] = "/assets/images/4.png";
            bodyBgs[4] = "/assets/images/5.png";
            var randomBgIndex = Math.round( Math.random() * 4 );
        document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
        </script>