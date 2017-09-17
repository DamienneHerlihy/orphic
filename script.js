$( "number" ).hover(
  function() {
    $( this ).append( $( "<span> +04 499 0102 </span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);