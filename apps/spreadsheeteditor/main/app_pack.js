require([
    'common/main/lib/controller/ScreenReaderFocus',
    'common/main/lib/component/ColorPaletteExt',
    'common/main/lib/component/ComboBoxDataView',
    'common/main/lib/view/AdvancedSettingsWindow',
    'common/main/lib/view/OptionsDialog',
    'common/main/lib/view/AutoCorrectDialog',
    'common/main/lib/view/DocumentAccessDialog',
    'common/main/lib/view/SaveAsDlg',
    'common/main/lib/view/CopyWarningDialog',
    'common/main/lib/view/ImageFromUrlDialog',
    'common/main/lib/view/SelectFileDlg',
    'common/main/lib/view/SymbolTableDialog',
    'common/main/lib/view/ListSettingsDialog',
    'common/main/lib/view/ExternalEditor',
    'common/main/lib/view/ExternalOleEditor',
    'common/main/lib/view/RenameDialog',
    'common/main/lib/view/PasswordDialog',
    'common/main/lib/view/PluginDlg',
    'common/main/lib/view/PluginPanel',
    'common/main/lib/view/ShapeShadowDialog',
    'common/main/lib/view/CustomizeQuickAccessDialog',
    'common/main/lib/view/DocumentHolderExt',

    'spreadsheeteditor/main/app/view/DocumentHolderExt',
    'spreadsheeteditor/main/app/view/PivotShowDetailDialog',
    'spreadsheeteditor/main/app/view/ChartDataDialog',
    'spreadsheeteditor/main/app/view/SortDialog',
    'spreadsheeteditor/main/app/view/ViewManagerDlg',
    'spreadsheeteditor/main/app/view/ChartDataDialog',
    'spreadsheeteditor/main/app/view/ChartTypeDialog',
    'spreadsheeteditor/main/app/view/ExternalLinksDlg',
    'spreadsheeteditor/main/app/view/FormatRulesEditDlg',
    'spreadsheeteditor/main/app/view/FormatRulesManagerDlg',
    'spreadsheeteditor/main/app/view/MacroDialog',
    'spreadsheeteditor/main/app/view/NameManagerDlg',
    'spreadsheeteditor/main/app/view/NamedRangePasteDlg',
    'spreadsheeteditor/main/app/view/ParagraphSettingsAdvanced',
    'spreadsheeteditor/main/app/view/PrintSettings',
    'spreadsheeteditor/main/app/view/ProtectRangesDlg',
    'spreadsheeteditor/main/app/view/ProtectedRangesManagerDlg',
    'spreadsheeteditor/main/app/view/RemoveDuplicatesDialog',
    'spreadsheeteditor/main/app/view/SlicerAddDialog',
    'spreadsheeteditor/main/app/view/Spellcheck',
    'spreadsheeteditor/main/app/view/WatchDialog',
    'spreadsheeteditor/main/app/view/FormatSettingsDialog',
    'spreadsheeteditor/main/app/view/ValueFieldSettingsDialog',
    'spreadsheeteditor/main/app/view/SpecialPasteDialog',
    'spreadsheeteditor/main/app/view/FieldSettingsDialog',
    'spreadsheeteditor/main/app/view/ChartSettingsDlg',
    'spreadsheeteditor/main/app/view/CellRangeDialog',
    'spreadsheeteditor/main/app/view/ChartDataRangeDialog',
    'spreadsheeteditor/main/app/view/ChartWizardDialog',
    'spreadsheeteditor/main/app/view/FillSeriesDialog',
    'spreadsheeteditor/main/app/view/NamedRangeEditDlg',
    'spreadsheeteditor/main/app/view/CreateSparklineDialog',
    'spreadsheeteditor/main/app/view/ImportFromXmlDialog',
    'spreadsheeteditor/main/app/view/GoalSeekDlg',
    'spreadsheeteditor/main/app/view/GoalSeekStatusDlg',
    'spreadsheeteditor/main/app/view/DataValidationDialog',
    'spreadsheeteditor/main/app/view/FormulaWizard',
    'spreadsheeteditor/main/app/view/ParagraphSettingsAdvanced',
    'spreadsheeteditor/main/app/view/ImageSettingsAdvanced',
    'spreadsheeteditor/main/app/view/SlicerSettingsAdvanced',
    'spreadsheeteditor/main/app/view/PivotSettingsAdvanced',
    'spreadsheeteditor/main/app/view/TableSettingsAdvanced',
    'spreadsheeteditor/main/app/view/ShapeSettingsAdvanced',
    'spreadsheeteditor/main/app/view/ProtectDialog',
    'spreadsheeteditor/main/app/view/ProtectedRangesEditDlg',
    'spreadsheeteditor/main/app/view/CreatePivotDialog',
    'spreadsheeteditor/main/app/view/SortOptionsDialog',
    'spreadsheeteditor/main/app/view/SetValueDialog',
    'spreadsheeteditor/main/app/view/ScaleDialog',
    'spreadsheeteditor/main/app/view/PrintTitlesDialog',
    'spreadsheeteditor/main/app/view/TableOptionsDialog',
    'spreadsheeteditor/main/app/view/PageMarginsDialog',
    'spreadsheeteditor/main/app/view/HyperlinkSettingsDialog',
    'spreadsheeteditor/main/app/view/HeaderFooterDialog',
    'spreadsheeteditor/main/app/view/AdvancedSeparatorDialog',
    'spreadsheeteditor/main/app/view/AutoFilterDialog',
], function () {
    Common.NotificationCenter.trigger('script:loaded');
});
