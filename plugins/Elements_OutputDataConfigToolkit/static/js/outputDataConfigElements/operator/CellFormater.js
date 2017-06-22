/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @category   Pimcore
 * @package    EcommerceFramework
 * @copyright  Copyright (c) 2009-2016 pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */


pimcore.registerNS("pimcore.plugin.outputDataConfigToolkit.outputDataConfigElements.operator.CellFormater");

pimcore.plugin.outputDataConfigToolkit.outputDataConfigElements.operator.CellFormater = Class.create(pimcore.plugin.outputDataConfigToolkit.outputDataConfigElements.Abstract, {
    type: "operator",
    class: "CellFormater",
    iconCls: "pimcore_icon_operator_cell_formater",
    defaultText: "operator_cell_formater",


    getConfigTreeNode: function(configAttributes) {
        if(configAttributes) {
            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: configAttributes.label,
                configAttributes: configAttributes,
                isTarget: true,
                maxChildCount: 1,
                expanded: true,
                leaf: false
            };
        } else {

            //For building up operator list
            var configAttributes = { type: this.type, class: this.class};

            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: t(this.defaultText),
                configAttributes: configAttributes,
                isTarget: true,
                maxChildCount: 1,
                leaf: true
            };
        }
        return node;
    },


    getCopyNode: function(source) {
        var copy = new Ext.tree.TreeNode({
            iconCls: this.iconCls,
            text: source.attributes.cssClass,
            isTarget: true,
            leaf: false,
            maxChildCount: 1,
            expanded: true,
            configAttributes: {
                label: null,
                type: this.type,
                class: this.class
            }
        });
        return copy;
    },


    getConfigDialog: function(node) {
        this.node = node;

        this.cssClass = new Ext.form.TextField({
            fieldLabel: t('operator_cell_formater_css_class'),
            length: 255,
            width: 200,
            value: this.node.attributes.configAttributes.cssClass
        });

        this.styles = new Ext.form.TextArea({
            fieldLabel: t('operator_cell_formater_css_styles'),
            length: 255,
            width: 200,
            height: 100,
            value: this.node.attributes.configAttributes.styles
        });


        this.configPanel = new Ext.Panel({
            layout: "form",
            bodyStyle: "padding: 10px;",
            items: [this.cssClass, this.styles],
            buttons: [{
                text: t("apply"),
                iconCls: "pimcore_icon_apply",
                handler: function () {
                    this.commitData();
                }.bind(this)
            }]
        });

        this.window = new Ext.Window({
            width: 400,
            height: 350,
            modal: true,
            title: t('operator_cell_formater_settings'),
            layout: "fit",
            items: [this.configPanel]
        });

        this.window.show();
    },

    commitData: function() {
        this.node.attributes.configAttributes.cssClass = this.cssClass.getValue();
        this.node.attributes.configAttributes.styles = this.styles.getValue();
        this.node.attributes.configAttributes.label = this.cssClass.getValue();
        this.node.setText( this.cssClass.getValue() );
        this.window.close();
    }
});