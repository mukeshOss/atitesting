<?php
if ($this->editmode) {
    echo $this->wysiwyg("description");
} else {
    echo $this->wysiwyg("description")->text;
}?>
