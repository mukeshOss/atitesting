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


pimcore.registerNS("pimcore.plugin.outputDataConfigToolkit.outputDataConfigElements.operator.Group");

pimcore.plugin.outputDataConfigToolkit.outputDataConfigElements.operator.Group = Class.create(pimcore.plugin.outputDataConfigToolkit.outputDataConfigElements.operator.Text, {
    type: "operator",
    class: "Group",
    iconCls: "pimcore_icon_operator_group",
    defaultText: "operator_group",
    windowTitle: "group_operator_settings",

    getConfigTreeNode: function(configAttributes) {
        if(configAttributes) {
            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: configAttributes.label,
                configAttributes: configAttributes,
                isTarget: true,
                allowChildren: true,
                allowedTypes: this.allowedTypes,
                allowedParents: this.allowedParents,
                maxChildCount: this.maxChildCount,
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
                allowedParents: this.allowedParents,
                allowedTypes: this.allowedTypes,
                maxChildCount: this.maxChildCount,
                configAttributes: configAttributes,
                isTarget: true,
                leaf: true
            };
        }
        return node;
    },


    getCopyNode: function(source) {
        var copy = new Ext.tree.TreeNode({
            iconCls: this.iconCls,
            text: source.attributes.text,
            isTarget: true,
            leaf: false,
            expanded: true,
            allowedTypes: this.allowedTypes,
            allowedParents: this.allowedParents,
            maxChildCount: this.maxChildCount,
            configAttributes: {
                label: source.attributes.text,
                type: this.type,
                class: this.class
            }
        });
        return copy;
    },


    getConfigDialog: function(node) {
        this.node = node;

        this.textfield = new Ext.form.TextField({
            fieldLabel: t('text'),
            length: 255,
            width: 200,
            value: this.node.attributes.configAttributes.label
        });

        this.configPanel = new Ext.Panel({
            layout: "form",
            bodyStyle: "padding: 10px;",
            items: [this.textfield],
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
            height: 150,
            modal: true,
            title: t(this.windowTitle),
            layout: "fit",
            items: [this.configPanel]
        });

        this.window.show();
    },

    commitData: function() {
        this.node.attributes.configAttributes.label = this.textfield.getValue();
        this.node.setText( this.textfield.getValue() );
        this.window.close();
    }
});