
<h2>
    <?php
    if ($this->editmode) {
        echo $this->input("subheading", array(
            'placeholder' => 'Enter Sub-heading text'
        ));
    } else {
        echo $this->input("subheading")->text;
    }?>
</h2>