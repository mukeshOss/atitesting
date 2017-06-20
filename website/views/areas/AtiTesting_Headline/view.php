
<div class="h1bg"> 
    <h1><?php
        if ($this->editmode) {
            echo $this->input("heading", array(
                'placeholder' => 'Enter heading text'
            ));
        } else {
            echo $this->input("heading")->text;
        }
        ?>
    </h1> 
</div>