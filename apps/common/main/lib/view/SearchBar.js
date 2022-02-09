/*
 *
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
*/
/**
 *    SearchBar.js
 *
 *    Created by Julia Svinareva on 03.02.2022
 *    Copyright (c) 2022 Ascensio System SIA. All rights reserved.
 *
 */

define([
    'common/main/lib/component/Window'
], function () {
    'use strict';

    Common.UI.SearchBar = Common.UI.Window.extend(_.extend({
        options: {
            modal: false,
            width: 328,
            height: 54,
            header: false,
            cls: 'search-bar',
            alias: 'SearchBar'
        },

        initialize : function(options) {
            _.extend(this.options, options || {});

            this.template = [
                '<div class="box">',
                    '<input type="text" id="search-bar-text" class="input-field form-control" maxlength="255" placeholder="'+this.textFind+'" autocomplete="off">',
                    '<div class="tools">',
                        '<div id="search-bar-back"></div>',
                        '<div id="search-bar-next"></div>',
                        '<div id="search-bar-close"></div>',
                    '</div>',
                '</div>'
            ].join('');

            this.options.tpl = _.template(this.template)(this.options);

            Common.UI.Window.prototype.initialize.call(this, this.options);

            Common.NotificationCenter.on('layout:changed', _.bind(this.onLayoutChanged, this));
        },

        render: function() {
            Common.UI.Window.prototype.render.call(this);

            this.inputSearch = this.$window.find('#search-bar-text');

            this.btnBack = new Common.UI.Button({
                parentEl: $('#search-bar-back'),
                cls: 'btn-toolbar',
                iconCls: 'toolbar__icon btn-arrow-up'
            });
            this.btnBack.on('click', _.bind(this.onBtnClick, this, 'back'));

            this.btnNext = new Common.UI.Button({
                parentEl: $('#search-bar-next'),
                cls: 'btn-toolbar',
                iconCls: 'toolbar__icon btn-arrow-down'
            });
            this.btnNext.on('click', _.bind(this.onBtnClick, this, 'next'));

            this.btnClose = new Common.UI.Button({
                parentEl: $('#search-bar-close'),
                cls: 'btn-toolbar',
                iconCls: 'toolbar__icon btn-close'
            });
            this.btnClose.on('click', _.bind(function () {
                this.hide();
            }, this))

            this.on('animate:before', _.bind(this.focus, this));

            return this;
        },

        show: function() {
            var top = $('#app-title').height() + $('#toolbar').height() + 2,
                left = Common.Utils.innerWidth() - $('#right-menu').width() - this.options.width - 32;
            Common.UI.Window.prototype.show.call(this, left, top);

            this.focus();
        },

        focus: function() {
            var me  = this;
            setTimeout(function(){
                me.inputSearch.focus();
                me.inputSearch.select();
            }, 10);
        },

        getSettings: function() {
            return {

            };
        },

        onLayoutChanged: function () {
            var top = $('#app-title').height() + $('#toolbar').height() + 2,
                left = Common.Utils.innerWidth() - $('#right-menu').width() - this.options.width - 32;
            this.$window.css({left: left, top: top});
        },

        onBtnClick: function(action, event) {
            if ( $('.asc-loadmask').length ) return;
            var opts = {
                textsearch  : this.inputSearch.val()
            };
            this.fireEvent('search:'+action, [this, opts]);
        },

        textFind: 'Find'

    }, Common.UI.SearchBar || {}));
});