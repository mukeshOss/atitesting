

<div class="h1bg"> 
	<h1>
<?php
if ($this->editmode) {
	echo $this->input("title", ["placeholder" => "Enter Heading.."]);
} else {
	echo $this->input("title")->text;
}
?></h1> </div>
