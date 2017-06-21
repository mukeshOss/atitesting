// JScript File
    
$(function()
{
  $(".searchjscript").keydown(function(e)
  { 
    if(e.which == 13)
    {
      $(".btnSearch").trigger("click");
      return false;
    }
  });
  
   $(".UEmail").keydown(function(e)
  { 
    if(e.which == 13)
    {
      $(".submitBtn").trigger("click");
      return false;
    }
  });
  
  $(".txtSearchAgain").keydown(function(e)
  { 
    if(e.which == 13)
    {
      $(".btnSearchAgain").trigger("click");
      return false;
    }
  });  
});