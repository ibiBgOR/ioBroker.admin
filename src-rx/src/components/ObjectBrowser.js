/**
 * Copyright 2020, bluefox <dogafox@gmail.com>
 *
 * MIT License
 *
 **/
import React from 'react';
import PropTypes from 'prop-types';
import copy from '@iobroker/adapter-react/Components/copy-to-clipboard';
import withStyles from '@material-ui/core/styles/withStyles';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth from '@material-ui/core/withWidth';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

// own
import Utils from '@iobroker/adapter-react/Components/Utils';
import TabContainer from './TabContainer';
import TabContent from './TabContent';
import TabHeader from './TabHeader';

// Icons
import IconExpert from  '@iobroker/adapter-react/Components/ExpertIcon';
import IconEdit from '@material-ui/icons/Edit';
import IconDelete from '@material-ui/icons/Delete';
import IconConfig from '@material-ui/icons/Settings';
import IconSystem from '@material-ui/icons/SettingsApplications';
import IconPhoto from '@material-ui/icons/Photo';
import IconGroup from '@material-ui/icons/SupervisedUserCircle';
import IconSchedule from '@material-ui/icons/CalendarToday';
import IconUser from '@material-ui/icons/PersonOutlined';
import IconHost from '@material-ui/icons/Router';
import IconConnection from '@material-ui/icons/Wifi';
import IconInfo from '@material-ui/icons/Info';
import IconMeta from '@material-ui/icons/Description';
import IconScript from '@material-ui/icons/Code';
import IconChart from '@material-ui/icons/ShowChart';
import IconEnum from '@material-ui/icons/ListAlt';
import IconColumns from '@material-ui/icons/ViewColumn';
import IconClose from '@material-ui/icons/Close';
import IconCheck from '@material-ui/icons/Check';

const ROW_HEIGHT = 32;
const ITEM_LEVEL = ROW_HEIGHT;
const SMALL_BUTTON_SIZE = 20;
const ICON_SIZE = 24;
const COLOR_NAME_SYSTEM = '#ff6d69';
const COLOR_NAME_SYSTEM_ADAPTER = '#5773ff';

const styles = theme => ({
    toolbar: {
        minHeight: 38,//Theme.toolbar.height,
//        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
    },
    toolbarButtons: {
        padding: 4,
        marginLeft: 4
    },
    switchColumnAuto: {
        marginLeft: theme.spacing(2),
    },
    dialogColumns: {
        transition: 'opacity 1s'
    },
    dialogColumnsLabel: {
        fontSize: 12,
        paddingTop: theme.spacing(1),
    },
    columnCustom: {
        width: '100%',
        display: 'inline-block',
    },
    columnCustomEditable: {
        cursor: 'text'
    },
    columnCustomCenter: {
        textAlign: 'center',
    },
    columnCustomLeft: {
        textAlign: 'left',
    },
    columnCustomRight: {
        textAlign: 'right',
    },
    width100: {
        width: '100%',
    },
    transparent_10: {
        opacity: 0.1
    },
    transparent_20: {
        opacity: 0.2
    },
    transparent_30: {
        opacity: 0.3
    },
    transparent_40: {
        opacity: 0.4
    },
    transparent_50: {
        opacity: 0.5
    },
    transparent_60: {
        opacity: 0.6
    },
    transparent_70: {
        opacity: 0.7
    },
    transparent_80: {
        opacity: 0.8
    },
    transparent_90: {
        opacity: 0.9
    },
    transparent_100: {
        opacity: 1
    },
    columnsDialogInputWidth: {
        width: 80
    },
    headerRow: {
        paddingLeft: theme.spacing(1),
        height: 38,
        whiteSpace: 'nowrap',
    },
    buttonClearFilter: {
        position: 'relative',
        float: 'right',
        padding: 0,
    },
    buttonClearFilterIcon: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        color: '#FF0000',
        opacity: 0.7
    },

    tableDiv: {
        paddingTop: 0,//theme.spacing(1),
        paddingLeft: 0,
        width: 'calc(100% - ' + theme.spacing(1) + 'px)',
        height: 'calc(100% - ' + 38 + 'px)',
        overflow: 'auto'
    },
    tableRow: {
        paddingLeft: theme.spacing(1),
        height: ROW_HEIGHT,
        lineHeight: ROW_HEIGHT + 'px',
        verticalAlign: 'top',
        userSelect: 'none',
        cursor: 'pointer',
        width: '100%',
        '&:hover': {
            background: theme.palette.primary.main,
            color: Utils.invertColor(theme.palette.primary.main, true),
        },
        whiteSpace: 'nowrap',
        flexWrap: 'nowrap',
    },
    checkBox: {
        padding: 0,
    },
    cellId: {
        //display: 'inline-block',
        fontSize: '1rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        //verticalAlign: 'top',
        //position: 'relative',
        '& .copyButton': {
            display: 'none'
        },
        '&:hover .copyButton': {
            display: 'block'
        },
        '& .iconOwn': {
            display: 'block',
            width:  ROW_HEIGHT - 4,
            height: ROW_HEIGHT - 4,
            marginTop: 2,
            float: 'right',
        },
        '&:hover .iconOwn': {
            display: 'none'
        },
        '& *': {
            width: 'initial'
        }
    },
    cellIdSpan: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
        //display: 'inline-block',
        //verticalAlign: 'top',
    },
    cellIdIconFolder: {
        marginRight: theme.spacing(1),
        width:  ROW_HEIGHT - 4,
        height: ROW_HEIGHT - 4,
        cursor: 'pointer',
        color: theme.palette.secondary.main || '#fbff7d',
    },
    cellIdIconDocument: {
        verticalAlign: 'middle',
        marginLeft: (ROW_HEIGHT - SMALL_BUTTON_SIZE) / 2,
        marginRight: theme.spacing(1),
        width:  SMALL_BUTTON_SIZE,
        height: SMALL_BUTTON_SIZE,
    },
    cellIdIconOwn: {

    },
    cellCopyButton: {
        color: 'white',
        width: SMALL_BUTTON_SIZE,
        height: SMALL_BUTTON_SIZE,
        //position: 'absolute',
        //top: (ROW_HEIGHT - SMALL_BUTTON_SIZE) / 2,
        right: 0,
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        },
    },
    cellEditButton: {
        width: SMALL_BUTTON_SIZE,
        height: SMALL_BUTTON_SIZE,
        color: 'white',
        position: 'absolute',
        top: (ROW_HEIGHT - SMALL_BUTTON_SIZE) / 2,
        right: SMALL_BUTTON_SIZE + 3,
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        },
    },
    cellName : {
        display: 'inline-block',
        verticalAlign: 'top',
        fontSize: 14,
        marginLeft: 5,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    cellType: {
        display: 'inline-block',
        verticalAlign: 'top',
        '& .itemIcon': {
            verticalAlign: 'middle',
            width: ICON_SIZE,
            height: ICON_SIZE,
            display: 'inline-block',
        },
    },
    cellRole : {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    cellRoom : {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    cellFunc : {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    cellValue : {
        display: 'inline-block',
        verticalAlign: 'top'
    },
    cellAdapter : {
        display: 'inline-block',
        verticalAlign: 'top'
    },
    cellValueTooltip: {
        fontSize: 12,
    },
    cellValueText: {
        width: '100%',
        height: ROW_HEIGHT,
        fontSize: 16,
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'relative',
        verticalAlign: 'top',
        '& .copyButton': {
            display: 'none'
        },
        '&:hover .copyButton': {
            display: 'block'
        }
    },
    cellValueTooltipTitle: {
        fontStyle: 'italic',
        width: 100,
        display: 'inline-block',
    },
    cellValueTooltipValue: {
        width: 120,
        display: 'inline-block',
        //overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    cellValueTooltipBox: {
        width: 250,
    },
    cellValueTextUnit: {
        marginLeft: theme.spacing(0.5),
        opacity: 0.8,
    },
    cellValueTextState: {
        opacity: 0.7,
    },
    cellValueTooltipCopy: {
        position: 'absolute',
        bottom: 3,
        right: 3,
    },
    cellValueTooltipEdit: {
        position: 'absolute',
        bottom: 3,
        right: 15,
    },
    cellButtons: {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    cellButtonsButton: {
        display: 'inline-block',
        opacity: 0.7,
        width:  SMALL_BUTTON_SIZE + 4,
        height: SMALL_BUTTON_SIZE + 4,
        '&:hover': {
            opacity: 1,
        }
    },
    cellButtonsButtonAlone: {
        marginLeft: SMALL_BUTTON_SIZE + 4,
    },
    cellButtonsButtonWithCustoms: {
        color: theme.palette.secondary.main,
    },
    cellButtonsValueButton: {
        position: 'absolute',
        display: 'inline-block',
        top: SMALL_BUTTON_SIZE / 2 - 2,
        opacity: 0.7,
        width: SMALL_BUTTON_SIZE - 2,
        height: SMALL_BUTTON_SIZE - 2,
        color: theme.palette.action.active,
        '&:hover': {
            opacity: 1,
        }
    },
    cellButtonsValueButtonCopy: {
        right: theme.spacing(1),
    },
    cellButtonsValueButtonEdit: {
        right: SMALL_BUTTON_SIZE / 2 + theme.spacing(2),
    },

    filteredOut: {
        opacity: 0.3
    },
    filterInput: {
        marginTop: 0,
        marginBottom: 0
    },
    selectIcon: {
        width: 16,
        height: 16,
        paddingRight: 5
    },
    selectNone: {
        opacity: 0.5,
    },
    itemSelected: {
        background: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        color: Utils.invertColor(theme.palette.primary.main, true),
    },
    header: {
        width: '100%'
    },
    headerCell: {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    headerCellValue: {
        paddingTop: 4,
        paddingLeft: 4,
        fontSize: 16
    },
    headerCellInput: {
        width: 'calc(100% - 5px)',
        height: ROW_HEIGHT,
        paddingTop: 3,
        '& .itemIcon': {
            verticalAlign: 'middle',
            width: ICON_SIZE,
            height: ICON_SIZE,
            display: 'inline-block',
        }
    },
    headerCellSelectItem: {
        '& .itemIcon': {
            width: ICON_SIZE,
            height: ICON_SIZE,
            marginRight: 5,
            display: 'inline-block'
        }
    },
    visibleButtons: {
        color: '#2196f3',
        opacity: 0.7
    },
    grow: {
        flexGrow: 1
    },
    enumIconDiv: {
        marginRight: theme.spacing(1),
        width: 32,
        height: 32,
        borderRadius: 8,
        background: '#FFFFFF'
    },
    enumIcon: {
        marginTop: 4,
        marginLeft: 4,
        width: 24,
        height: 24
    },
    enumList: {
        minWidth: 250,
    },
    enumCheckbox: {
        minWidth: 0,
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
    }
});

// d=data, t=target, s=start, e=end, m=middle
function binarySearch(list, find, _start, _end) {
    _start = _start || 0;
    if (_end === undefined) {
        _end = list.length - 1;
        if (!_end) {
            return list[0] === find;
        }
    }
    const middle = Math.floor((_start + _end) / 2);
    if (find === list[middle]) {
        return list[middle];
    }
    if (_end - 1 === _start) {
        return list[_start] === find || list[_end] === find;
    }
    if (find > list[middle]) {
        return binarySearch(list, find, middle, _end);
    }
    if (find < list[middle]) {
        return binarySearch(list, find, _start, middle);
    }
}

function applyFilter(item, filters, lang, objects, context, counter, customFilter) {
    let filteredOut = false;
    if (!context) {
        context = {};
        if (filters.id) {
            context.id = filters.id.toLowerCase();
        }
        if (filters.name) {
            context.name = filters.name.toLowerCase();
        }
        if (filters.type) {
            context.type = filters.type.toLowerCase();
        }
        if (filters.customs) {
            context.customs = filters.customs.toLowerCase();
        }
        if (filters.role) {
            context.role = filters.role.toLowerCase();
        }
        if (filters.room) {
            context.room = (objects[filters.room] && objects[filters.room].common && objects[filters.room].common.members) || [];
        }
        if (filters.func) {
            context.func = (objects[filters.func] && objects[filters.func].common && objects[filters.func].common.members) || [];
        }
    }

    const data = item.data;

    if (data && data.id) {
        const common = data.obj && data.obj.common;

        if (customFilter) {
            if (customFilter.type && customFilter.type !== data.obj.type) {
                filteredOut = true;
            } else
            if (customFilter.common && customFilter.common.custom) {
                if (!common || !common.custom || (customFilter.common.custom !== true && !common.custom[customFilter.common.custom])) {
                    filteredOut = true;
                }
            }
        }

        if (!filteredOut && !filters.expertMode) {
            filteredOut =
                data.id === 'system' ||
                data.id === 'enum' ||
                // (data.obj && data.obj.type === 'meta') ||
                data.id.startsWith('system.') ||
                data.id.startsWith('enum.') ||
                data.id.startsWith('_design/') ||
                (common && common.expert);
        }
        if (!filteredOut && context.id) {
            if (data.fID === undefined) {
                data.fID = data.id.toLowerCase();
            }
            filteredOut = data.fID.indexOf(context.id) === -1;
        }
        if (!filteredOut && context.name && common) {
            if (data.fName === undefined) {
                data.fName = (common && getName(common.name, lang)) || '';
                data.fName = data.fName.toLowerCase();
            }
            filteredOut = !data.fName.includes(context.name);
        }
        if (!filteredOut && filters.role && common) {
            filteredOut = !(common.role && common.role.startsWith(context.role));
        }
        if (!filteredOut && context.room) {
            filteredOut = !context.room.find(id => id === data.id || data.id.startsWith(id + '.'));
        }
        if (!filteredOut && context.func) {
            filteredOut = !context.func.find(id => id === data.id || data.id.startsWith(id + '.'));
        }
        if (!filteredOut && context.type) {
            filteredOut = !(data.obj && data.obj.type && data.obj.type === context.role);
        }
        if (!filteredOut && context.customs && common) {
            filteredOut = !common.customs || !common.customs[context.customs];
        }
    }
    data.visible = !filteredOut;
    data.hasVisibleChildren = false;
    if (item.children) {
        item.children.forEach(_item => {
            const visible = applyFilter(_item, filters, lang, objects, context, counter, customFilter);
            if (visible) {
                data.hasVisibleChildren = true;
            }
        });
    }

    const visible = data.visible || data.hasVisibleChildren;
    if (counter && visible) {
        counter.count++;
    }

    return visible;
}

function getSystemIcon(objects, id, k, imagePrefix) {
    let icon;

    // system or design have special icons
    if (id.startsWith('_design/') || (id === 'system')) {
        icon = <IconSystem className="iconOwn" />;
    } else if (id === '0_userdata' || id === '0_userdata.0') {
        icon = <IconPhoto className="iconOwn" />;
    } else if (id === 'alias' || id === 'alias.0') {
        icon = <IconAlias className="iconOwn" />;
    } else if (id === 'system.adapter') {
        icon = <IconSystem className="iconOwn" />;
    } else if (id === 'system.group') {
        icon = <IconGroup className="iconOwn" />;
    } else if (id === 'system.user') {
        icon = <IconUser className="iconOwn" />;
    } else if (id === 'system.host') {
        icon = <IconHost className="iconOwn" />;
    } else if (id.endsWith('.connection') || id.endsWith('.connected')) {
        icon = <IconConnection className="iconOwn" />;
    } else if (id.endsWith('.info')) {
        icon = <IconInfo className="iconOwn" />;
    } else if (objects[id] && objects[id].type === 'meta') {
        icon = <IconMeta className="iconOwn" />;
    } else if (k < 2) {
        // detect "cloud.0"
        if (objects['system.adapter.' + id]) {
            icon = getSelectIdIcon(objects, 'system.adapter.' + id, imagePrefix);
        }
    }

    return icon || null;
}

function buildTree(objects, options) {
    options = options || {};
    const imagePrefix = options.imagePrefix || '.';

    const ids = Object.keys(objects);

    ids.sort((a, b) => {
        if (a === b) return 0;
        a = a.replace(/\./g, '!!!');
        b = b.replace(/\./g, '!!!');
        if (a > b) return 1;
        return -1;
    });

    // find empty nodes and create names for it
    let currentPathArr = [];
    let currentPath = '';
    let currentPathLen = 0;
    let root = {
        data: {
            name: '',
            id: ''
        },
        children: []
    };

    let info = {
        funcEnums: [],
        roomEnums: [],
        roles:     [],
        ids:       [],
        types:     [],
        objects,
        customs:   [],
        hasSomeCustoms: false,
    };

    let croot = root;
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const obj = objects[id];
        const parts = id.split('.');

        if (obj.type && !info.types.includes(obj.type)) {
            info.types.push(obj.type);
        }

        if (id.startsWith('alias')) {
            console.log(id);
        }

        if (obj) {
            const common = obj.common;
            const role = common && common.role;
            if (role && !info.roles.includes(role)) {
                info.roles.push(role);
            } else if (id.startsWith('enum.rooms.')) {
                info.roomEnums.push(id);
            } else if (id.startsWith('enum.functions.')) {
                info.funcEnums.push(id);
            } else if (obj.type === 'instance' && common && common.supportCustoms) {
                info.hasSomeCustoms = true;
                info.customs.push(id.substring('system.adapter.'.length));
            }
        }

        info.ids.push(id);

        let repeat;

        // if next level
        do {
            repeat = false;

            // If current level is still OK and we can add ID to children
            if (!currentPath || id.startsWith(currentPath + '.')) {
                // if more than one level added
                if (parts.length - currentPathLen > 1) {
                    let curPath = currentPath;
                    // generate missing levels
                    for (let k = currentPathLen; k < parts.length - 1; k++) {
                        curPath += (curPath ? '.' : '') + parts[k];
                        // level does not exist
                        if (!binarySearch(info.ids, curPath)) {
                            const _croot = {
                                data: {
                                    name:   parts[k],
                                    parent: croot,
                                    id:     curPath,
                                    obj:    objects[curPath],
                                    level:  k,
                                    icon:   getSystemIcon(objects, curPath, k, imagePrefix),
                                    generated: true,
                                }
                            };

                            croot.children = croot.children || [];
                            croot.children.push(_croot);
                            croot = _croot;
                            info.ids.push(curPath); // IDs will be added by alphabet
                        } else {
                            croot = croot.children.find(item => item.data.name === parts[k]);
                        }
                    }
                }

                const _croot = {
                    data: {
                        name:   parts[parts.length - 1],
                        title:  getName(obj && obj.common && obj.common.name, options.lang),
                        obj,
                        parent: croot,
                        icon:   getSelectIdIcon(objects, id, imagePrefix) || getSystemIcon(objects, id, 0, imagePrefix),
                        id,
                        hasCustoms: obj.common && obj.common.custom && Object.keys(obj.common.custom).length,
                        level:  parts.length - 1,
                        generated: false,
                    }
                };

                croot.children = croot.children || [];
                croot.children.push(_croot);
                croot = _croot;

                currentPathLen = parts.length;
                currentPathArr = parts;
                currentPath    = id;
            } else {
                let u = 0;

                while (currentPathArr[u] === parts[u]) {
                    u++;
                }

                if (u > 0) {
                    let move = currentPathArr.length;
                    currentPathArr = currentPathArr.splice(0, u);
                    currentPathLen = u;
                    currentPath = currentPathArr.join('.');
                    while (move > u) {
                        croot = croot.data.parent;
                        move--;
                    }
                } else {
                    croot = root;
                    currentPathArr = [];
                    currentPath    = '';
                    currentPathLen = 0;
                }
                repeat = true;
            }
        } while (repeat);
    }

    info.roomEnums.sort();
    info.funcEnums.sort();
    info.roles.sort();
    info.types.sort();

    return {info, root};
}

function findNode(root, id, _parts, _path, _level) {
    if (root.data.id === id) {
        return root;
    }
    if (!_parts) {
        _parts = id.split('.');
        _level = 0;
        _path = _parts[_level];
    }
    if (!root.children && root.data.id !== id) {
        return null;
    } else {
        let found;
        for (let i = 0; i < root.children.length; i++) {
            const _id = root.children[i].data.id;
            if (_id === _path) {
                found = root.children[i];
                break;
            } else
            if (_id < _path) continue;
            if (_id > _path) break;
        }
        if (found) {
            return findNode(found, id, _parts, _path + '.' + _parts[_level + 1], _level + 1);
        } else {
            return null;
        }
    }
}

function getName(name, lang) {
    if (name && typeof name === 'object') {
        return (name[lang] || name.en || '').toString();
    } else {
        return (name || '').toString();
    }
}

function findRoomsForObject(data, id, lang, withParentInfo, rooms) {
    if (!id) {
        return [];
    }
    rooms = rooms || [];
    for (let i = 0; i < data.roomEnums.length; i++) {
        const common = data.objects[data.roomEnums[i]] && data.objects[data.roomEnums[i]].common;
        const name = getName(common.name, lang);

        if (common.members && common.members.indexOf(id) !== -1 && rooms.indexOf(name) === -1) {
            if (!withParentInfo) {
                rooms.push(name);
            } else {
                rooms.push({ name: name, origin: id });
            }
        }
    }
    const parts = id.split('.');
    parts.pop();
    id = parts.join('.');
    if (data.objects[id]) {
        findRoomsForObject(data, id, lang, withParentInfo, rooms);
    }

    return rooms;
}

function findEnumsForObjectAsIds(data, id, enumName, funcs) {
    if (!id) {
        return [];
    }
    funcs = funcs || [];
    for (let i = 0; i < data[enumName].length; i++) {
        const common = data.objects[data[enumName][i]] && data.objects[data[enumName][i]].common;
        if (common && common.members && common.members.indexOf(id) !== -1 &&
            funcs.indexOf(data[enumName][i]) === -1) {
            funcs.push(data[enumName][i]);
        }
    }

    return funcs;
}

function findFunctionsForObject(data, id, lang, withParentInfo, funcs) {
    if (!id) {
        return [];
    }
    funcs = funcs || [];
    for (let i = 0; i < data.funcEnums.length; i++) {
        const common = data.objects[data.funcEnums[i]] && data.objects[data.funcEnums[i]].common;
        const name = getName(common.name, lang);
        if (common && common.members && common.members.indexOf(id) !== -1 && funcs.indexOf(name) === -1) {
            if (!withParentInfo) {
                funcs.push(name);
            } else {
                funcs.push({name: name, origin: id});
            }
        }
    }
    const parts = id.split('.');
    parts.pop();
    id = parts.join('.');
    if (data.objects[id]) {
        findFunctionsForObject(data, id, lang, withParentInfo, funcs);
    }

    return funcs;
}

function getStates(obj) {
    let states;
    if (obj &&
        obj.common &&
        obj.common.states) {
        states = obj.common.states;
    }
    if (states) {
        if (typeof states === 'string' && states[0] === '{') {
            try {
                states = JSON.parse(states);
            } catch (ex) {
                console.error('Cannot parse states: ' + states);
                states = null;
            }
        } else
            // if old format val1:text1;val2:text2
        if (typeof states === 'string') {
            const parts = states.split(';');
            states = {};
            for (let p = 0; p < parts.length; p++) {
                const s = parts[p].split(':');
                states[s[0]] = s[1];
            }
        }
    }
    return states;
}

function quality2text(q) {
    if (!q) return 'ok';
    const custom = q & 0xFFFF0000;
    let text = '';
    if (q & 0x40) text += 'device';
    if (q & 0x80) text += 'sensor';
    if (q & 0x01) text += ' bad';
    if (q & 0x02) text += ' not connected';
    if (q & 0x04) text += ' error';

    return text + (custom ? '|0x' + (custom >> 16).toString(16).toUpperCase() : '') + ' [0x' + q.toString(16).toUpperCase() + ']';
}

function formatDate(dateObj) {
    //return dateObj.getFullYear() + '-' +
    //    ('0' + (dateObj.getMonth() + 1).toString(10)).slice(-2) + '-' +
    //    ('0' + (dateObj.getDate()).toString(10)).slice(-2) + ' ' +
    //    ('0' + (dateObj.getHours()).toString(10)).slice(-2) + ':' +
    //    ('0' + (dateObj.getMinutes()).toString(10)).slice(-2) + ':' +
    //    ('0' + (dateObj.getSeconds()).toString(10)).slice(-2);
    // Following implementation is 5 times faster
    if (!dateObj) return '';

    let text = dateObj.getFullYear();
    let v = dateObj.getMonth() + 1;
    if (v < 10) {
        text += '-0' + v;
    } else {
        text += '-' + v;
    }

    v = dateObj.getDate();
    if (v < 10) {
        text += '-0' + v;
    } else {
        text += '-' + v;
    }

    v = dateObj.getHours();
    if (v < 10) {
        text += ' 0' + v;
    } else {
        text += ' ' + v;
    }
    v = dateObj.getMinutes();
    if (v < 10) {
        text += ':0' + v;
    } else {
        text += ':' + v;
    }

    v = dateObj.getSeconds();
    if (v < 10) {
        text += ':0' + v;
    } else {
        text += ':' + v;
    }

    v = dateObj.getMilliseconds();
    if (v < 10) {
        text += '.00' + v;
    } else if (v < 100) {
        text += '.0' + v;
    } else {
        text += '.' + v;
    }

    return text;
}

function formatValue(id, state, obj, texts) {
    const states = getStates(obj);
    const isCommon = obj.common;

    const valText = {};
    let v = !state || state.val === null ? '(null)' : (state.val === undefined ? '[undef]' : state.val);
    const type = typeof v;
    if (type === 'number') {
        v = (Math.round(v * 100000000) / 100000000); // remove 4.00000000000000001
    } else if (type === 'object') {
        v = JSON.stringify(v);
    } else if (type !== 'string') {
        v = v.toString();
    }

    if (isCommon && isCommon.role && typeof isCommon.role === 'string' && isCommon.role.match(/^value\.time|^date/)) {
        v = v ? new Date(v).toString() : v;
    } else if (typeof v !== 'string') {
        v = v.toString();
    }

    if (states && states[v] !== undefined) {
        valText.s = v;
        v = states[valText.s];
    }

    let valFull;
    if (isCommon && isCommon.unit) {
        valText.u = isCommon.unit;
    }
    valFull = [{t: texts.value, v}];

    if (state) {
        if (state.ack !== undefined) {
            valFull.push({t: texts.ack, v: state.ack.toString()});
        }
        if (state.ts) {
            valFull.push({t: texts.ts, v: state.ts ? formatDate(new Date(state.ts)) : ''});
        }
        if (state.lc) {
            valFull.push({t: texts.lc, v: state.lc ? formatDate(new Date(state.lc)) : ''});
        }
        if (state.from) {
            valFull.push({t: texts.from, v: state.from || ''});
        }
        if (state.user) {
            valFull.push({t: texts.user, v: state.user || ''});
        }
        valFull.push({t: texts.quality, v: quality2text(state.q || 0), nbr: true});
    }

    if (typeof v === 'string' && v) {
        v = v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    valText.v = v;

    return {
        valText,
        valFull,
        style: { color: state.ack ? (state.q ? 'orange' : '') : '#c00000' }
    };
}

function getSelectIdIcon(objects, id, imagePrefix) {
    imagePrefix = imagePrefix || '.';//http://localhost:8081';
    let src = '';
    const _id_ = 'system.adapter.' + id;
    const aIcon = id && objects[_id_] && objects[_id_].common && objects[_id_].common.icon;
    if (aIcon) {
        // if not BASE64
        if (!aIcon.startsWith('data:image/')) {
            if (aIcon.includes('.')) {
                src = imagePrefix + '/adapter/' + objects[_id_].common.name + '/' + aIcon;
            } else {
                return null; //'<i class="material-icons iob-list-icon">' + objects[_id_].common.icon + '</i>';
            }
        } else {
            src = aIcon;
        }
    } else {
        const common = objects[id] && objects[id].common;

        if (common) {
            const cIcon = common.icon;
            if (cIcon) {
                if (!cIcon.startsWith('data:image/')) {
                    if (cIcon.includes('.')) {
                        let instance;
                        if (objects[id].type === 'instance' || objects[id].type === 'adapter') {
                            src = imagePrefix + '/adapter/' + common.name + '/' + cIcon;
                        } else if (id && id.startsWith('system.adapter.')) {
                            instance = id.split('.', 3);
                            if (cIcon[0] === '/') {
                                instance[2] += cIcon;
                            } else {
                                instance[2] += '/' + cIcon;
                            }
                            src = imagePrefix + '/adapter/' + instance[2];
                        } else {
                            instance = id.split('.', 2);
                            if (cIcon[0] === '/') {
                                instance[0] += cIcon;
                            } else {
                                instance[0] += '/' + cIcon;
                            }
                            src = imagePrefix + '/adapter/' + instance[0];
                        }
                    } else {
                        return null;
                    }
                } else {
                    // base 64 image
                    src = cIcon;
                }
            }
        }
    }

    return src || null;
}

function prepareSparkData(values, from) {
    // set every hour one point
    let time = from;
    let i = 1;
    const v = [];

    while (i < values.length && time < from + 25 * 3600000) {
        // find the interval
        while (values[i - 1].ts < time && time <= values[i].ts && i < values.length) {
            i++;
        }
        if (i === 1 && values[i - 1].ts >= time) {
            // assume the value was always null
            v.push(0);
        } else
        if (i < values.length) {
            if (typeof values[i].val === 'boolean' || typeof values[i - 1].val === 'boolean') {
                v.push(values[i].val ? 1 : 0);
            } else {
                // remove nulls
                values[i - 1].val = values[i - 1].val || 0;
                values[i].val = values[i].val || 0;
                // interpolate
                let val = values[i - 1].val + (values[i].val - values[i - 1].val) * (time - values[i - 1].ts) / (values[i].ts - values[i - 1].ts);

                v.push(val);
            }
        }

        time += 3600000;
    }

    return v;
}

/**
 * @type {import('./types').ObjectBrowserTableFilter}
 */
const DEFAULT_FILTER = {
    id:     '',
    name:   '',
    room:   '',
    func:   '',
    role:   '',
    expertMode: false
};

class IconState extends React.Component {
    render() {
        return <svg viewBox="0 0 320 320" width={ICON_SIZE} height={ICON_SIZE} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <g>
                <rect rx="32" id="svg_1" height="272" width="267" y="25" x="25" strokeWidth="15" stroke="currentColor" fill="none"/>
                <ellipse ry="54" rx="54" id="svg_2" cy="160" cx="160" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="#fff"/>
            </g>
        </svg>;
    }
}

class IconChannel extends React.Component {
    render() {
        return <svg viewBox="0 0 320 320" width={ICON_SIZE} height={ICON_SIZE} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <g>
                <rect rx="32" id="svg_1" height="272" width="267" y="25" x="25" strokeWidth="15" stroke="currentColor" fill="none"/>
                <ellipse stroke="currentColor" ry="26" rx="26" id="svg_2" cy="248" cx="160" fill="none" strokeWidth="15"/>
                <line strokeLinecap="null" strokeLinejoin="null" id="svg_3" y2="201.94531" x2="159.5" y1="46.94531" x1="159.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="none"/>
                <rect id="svg_4" height="27" width="50" y="79.7979" x="133.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="#fff"/>
            </g>
        </svg>;
    }
}

class IconDevice extends React.Component {
    render() {
        return <svg viewBox="0 0 320 320" width={ICON_SIZE} height={ICON_SIZE} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <g>
                <rect rx="32" id="svg_1" height="272" width="267" y="25" x="25" strokeWidth="15" stroke="currentColor" fill="none"/>
                <ellipse stroke="currentColor" ry="26" rx="26" id="svg_2" cy="252" cx="160" fillOpacity="null" strokeOpacity="null" strokeWidth="15" fill="#fff"/>
                <line strokeLinecap="null" strokeLinejoin="null" id="svg_3" y2="201.94531" x2="159.5" y1="46.94531" x1="159.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="none"/>
                <rect height="27" width="50" y="140.83068" x="133.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="#fff"/>
                <ellipse stroke="currentColor" ry="26" rx="26" id="svg_5" cy="251" cx="241" fillOpacity="null" strokeOpacity="null" strokeWidth="15" fill="#fff"/>
                <line strokeLinecap="null" strokeLinejoin="null" id="svg_6" y2="200.94531" x2="240.5" y1="45.94531" x1="240.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="none"/>
                <rect height="27" width="50" y="78.7979" x="214.5" strokeWidth="15" stroke="currentColor" fill="#fff"/>
                <ellipse stroke="currentColor" ry="26" rx="26" id="svg_8" cy="252" cx="84" fillOpacity="null" strokeOpacity="null" strokeWidth="15" fill="#fff"/>
                <line strokeLinecap="null" strokeLinejoin="null" id="svg_9" y2="201.94531" x2="83.5" y1="46.94531" x1="83.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="none"/>
                <rect height="27" width="50" y="79.7979" x="57.5" fillOpacity="null" strokeOpacity="null" strokeWidth="15" stroke="currentColor" fill="#fff"/>
            </g>
        </svg>;
    }
}
// Copyright Apache 2.0 https://raw.githubusercontent.com/material-icons/material-icons/master/svg/filter_alt/baseline.svg
// https://github.com/material-icons/material-icons/blob/master/LICENSE
class IconClearFilter extends React.Component {
    render() {
        return <svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path fill="currentColor" stroke="currentColor" d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"/>
        </svg>;
    }
}

// all icons are copied from https://github.com/FortAwesome/Font-Awesome/blob/0d1f27efb836eb2ab994ba37221849ed64a73e5c/svgs/regular/
class IconClosed extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 650 512" xmlns="http://www.w3.org/2000/svg" width={this.props.width || 28} height={this.props.height || 28} className={ this.props.className }>
            <path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"/>
        </svg>;
    }
}
class IconOpen extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 650 512" xmlns="http://www.w3.org/2000/svg" width={this.props.width || 28} height={this.props.height || 28} className={ this.props.className }>
            <path fill="currentColor" d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"/>
        </svg>;
    }
}
class IconDocument extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 512 512" width={this.props.width || 20} height={this.props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"/>
        </svg>;
    }
}
class IconCopy extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 512 512" width={this.props.width || 20} height={this.props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/>
        </svg>;
    }
}
class IconAlias extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 512 512" width={this.props.width || 20} height={this.props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"/>
        </svg>;
    }
}
class IconInstance extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 512 512" width={this.props.width || 20} height={this.props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path fill="currentColor" d="M448 0L320 96v62.06l-83.03 83.03c6.79 4.25 13.27 9.06 19.07 14.87 5.8 5.8 10.62 12.28 14.87 19.07L353.94 192H416l96-128-64-64zM128 278.59L10.92 395.67c-14.55 14.55-14.55 38.15 0 52.71l52.7 52.7c14.56 14.56 38.15 14.56 52.71 0L233.41 384c29.11-29.11 29.11-76.3 0-105.41s-76.3-29.11-105.41 0z"/>        </svg>;
    }
}
class IconAdapter extends React.Component {
    render() {
        return <svg onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 512 512" width={this.props.width || 20} height={this.props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path d="M448 0L320 96v62.06l-83.03 83.03c6.79 4.25 13.27 9.06 19.07 14.87 5.8 5.8 10.62 12.28 14.87 19.07L353.94 192H416l96-128-64-64zM128 278.59L10.92 395.67c-14.55 14.55-14.55 38.15 0 52.71l52.7 52.7c14.56 14.56 38.15 14.56 52.71 0L233.41 384c29.11-29.11 29.11-76.3 0-105.41s-76.3-29.11-105.41 0z"/>
        </svg>;
    }
}

const ITEM_IMAGES = {
    state: <IconState className="itemIcon" />,
    channel: <IconChannel className="itemIcon" />,
    device: <IconDevice className="itemIcon" />,
    adapter: <IconAdapter className="itemIcon" />,
    meta: <IconMeta className="itemIcon" />,
    instance: <IconInstance className="itemIcon" style={{color: '#7da7ff'}}/>,
    enum: <IconEnum className="itemIcon" />,
    chart: <IconChart className="itemIcon" />,
    config: <IconConfig className="itemIcon" />,
    group: <IconGroup className="itemIcon" />,
    user: <IconUser className="itemIcon" />,
    host: <IconHost className="itemIcon" />,
    schedule: <IconSchedule className="itemIcon" />,
    script: <IconScript className="itemIcon" />,
};

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 3,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const SCREEN_WIDTHS = {
    // extra-small: 0px
    xs: {idWidth: 300, fields: ['room'], widths: {name: 200, room: 200}},
    // small: 600px
    sm: {idWidth: 300, fields: ['room', 'func', 'buttons'], widths: {name: 200,room: 180, func: 180, buttons: 76}},
    // medium: 960px
    md: {idWidth: 300, fields: ['room', 'func', 'val', 'buttons'], widths: {name: 200,room: 150, func: 150, val: 120, buttons: 76}},
    // large: 1280px
    lg: {idWidth: 300, fields: ['name', 'type', 'role', 'room', 'func', 'val', 'buttons'],
        widths: {
            name: 300,
            type: 80,
            role: 120,
            room: 180,
            func: 180,
            val: 120,
            buttons: 76
        }
    },

    // extra-large: 1920px
    xl: {idWidth: 650, fields: ['name', 'type', 'role', 'room', 'func', 'val', 'buttons'],
        widths: {
            name: 400,
            type: 80,
            role: 120,
            room: 180,
            func: 180,
            val: 170,
            buttons: 76
        }
    },
};

/**
 * @extends {React.Component<import('./types').ObjectBrowserProps>}
 */
class ObjectBrowser extends React.Component {
    /**
     * @param {import('./types').ObjectBrowserProps} props
     */
    constructor(props) {
        super(props);

        this.lastSelectedItems = window.localStorage.getItem((props.dialogName || 'App') + '.objectSelected') || '[]';
        try {
            this.lastSelectedItems = JSON.parse(this.lastSelectedItems);
            if (typeof this.lastSelectedItems !== 'object') {
                this.lastSelectedItems = [this.lastSelectedItems];
            }
            this.lastSelectedItems = this.lastSelectedItems.filter(id => id);
        } catch (e) {

        }

        let expanded = window.localStorage.getItem((props.dialogName || 'App') + '.objectExpanded') || '[]';
        try {
            expanded = JSON.parse(expanded);
        } catch (e) {
            expanded = [];
        }

        let filter =
            props.defaultFilters ||
            window.localStorage.getItem((props.dialogName || 'App') + '.objectFilter') ||
            Object.assign({}, DEFAULT_FILTER);

        if (typeof filter === 'string') {
            try {
                filter = JSON.parse(filter);
            } catch (e) {
                filter = Object.assign({}, DEFAULT_FILTER);
            }
        }

        filter.expertMode = props.expertMode !== undefined ? props.expertMode : (window.localStorage.getItem('App.expertMode') === 'true');
        this.tableRef  = React.createRef();
        this.filterRefs = {};

        Object.keys(DEFAULT_FILTER).forEach(name =>
            this.filterRefs[name] = React.createRef());

        this.lastAppliedFilter = null;
        this.pausedSubscribes = false;

        this.selectedFound = false;
        this.root = null;
        this.states = {};
        this.subscribes = [];
        this.statesUpdateTimer = null;
        this.objectsUpdateTimer = null;

        this.visibleCols = props.columns || SCREEN_WIDTHS[props.width].fields;

        // remove type column if only one type must be selected
        if (props.types && props.types.length === 1) {
            const pos = this.visibleCols.indexOf('type');
            pos !== -1 && this.visibleCols.splice(pos, 1);
        }

        this.possibleCols = SCREEN_WIDTHS.xl.fields;

        let customDialog = null;

        if (props.router) {
            const location = props.router.getLocation();
            if (location.id && location.dialog === 'custom') {
                customDialog = [location.id];
                this.pauseSubscribe(true);
            }
        }

        let selected = (props.selected || '');
        if (typeof selected !== 'object') {
            selected = [selected];
        }
        selected = selected.map(id => id.replace(/["']/g, '')).filter(id => id);

        let columns = window.localStorage.getItem((props.dialogName || 'App') + '.columns');
        try {
            columns = columns ? JSON.parse(columns) : null;
        } catch (e) {
            columns = null;
        }

        let columnsWidths = window.localStorage.getItem((props.dialogName || 'App') + '.columnsWidths');
        try {
            columnsWidths = columnsWidths ? JSON.parse(columnsWidths) : {};
        } catch (e) {
            columnsWidths = {};
        }

        this.imagePrefix = props.imagePrefix || '.';
        let foldersFirst = window.localStorage.getItem((props.dialogName || 'App') + '.foldersFirst');
        if (foldersFirst === 'false') {
            foldersFirst = false;
        } else if (foldersFirst === 'true') {
            foldersFirst = true;
        } else {
            foldersFirst = props.foldersFirst === undefined ? true : props.foldersFirst;
        }

        this.state = {
            loaded: false,
            foldersFirst,
            selected,
            filter,
            filterKey: 0,
            depth: 0,
            expandAllVisible: false,
            expanded,
            toast: '',
            lang: props.lang,
            scrollBarWidth: 16,
            hasSomeCustoms: false,
            customDialog,
            editObjectDialog: '',
            enumDialog: null,

            columns,
            columnsForAdmin: null,
            columnsSelectorShow: false,
            columnsAuto: window.localStorage.getItem((props.dialogName || 'App') + '.columnsAuto') === 'false' ? false : true,
            columnsWidths,
            columnsDialogTransparent: 100,
            columnsEditCustomDialog: null,
            customColumnDialogValueChanged: false,
        };

        this.edit = {};

        this.texts = {
            value:          props.t('ra_tooltip_value'),
            ack:            props.t('ra_tooltip_ack'),
            ts:             props.t('ra_tooltip_ts'),
            lc:             props.t('ra_tooltip_lc'),
            from:           props.t('ra_tooltip_from'),
            user:           props.t('ra_tooltip_user'),
            quality:        props.t('ra_tooltip_quality'),
            editObject:     props.t('ra_tooltip_editObject'),
            deleteObject:   props.t('ra_tooltip_deleteObject'),
            customConfig:   props.t('ra_tooltip_customConfig'),
            copyState:      props.t('ra_tooltip_copyState'),
            editState:      props.t('ra_tooltip_editState'),
            close:          props.t('ra_Close'),
            filter_id:      props.t('ra_filter_id'),
            filter_name:    props.t('ra_filter_name'),
            filter_type:    props.t('ra_filter_type'),
            filter_role:    props.t('ra_filter_role'),
            filter_room:    props.t('ra_filter_room'),
            filter_func:    props.t('ra_filter_func'),
            filter_customs: props.t('ra_filter_customs'),
        };

        this.onStateChangeBound = this.onStateChange.bind(this);

        this.calculateColumnsVisibility();

        props.socket.getObjects(true, true)
            .then(objects => {
                if (props.types) {
                    this.objects = {};
                    Object.keys(objects).forEach(id => {
                        const type = objects[id] && objects[id].type;
                        if (type && (
                            type === 'channel'  ||
                            type === 'device'   ||
                            type === 'enum'     ||
                            type === 'folder'   ||
                            type === 'adapter'  ||
                            type === 'instance' ||
                            props.types.includes(type))) {
                            this.objects[id] = objects[id];
                        }
                    });
                } else {
                    this.objects = objects;
                }

                const {info, root} = buildTree(this.objects, this.props);
                this.root = root;
                this.info = info;

                // Show first selected item
                let node = this.state.selected && this.state.selected.length && findNode(this.root, this.state.selected[0]);

                // If selected ID is not visible, reset filter
                if (node && !applyFilter(node, this.state.filter, this.state.lang, this.objects, null, null, props.customFilter)) {
                    // reset filter
                    this.setState({ filter: Object.assign({}, DEFAULT_FILTER) }, () => {
                        this.setState({ loaded: true }, () =>
                            this.expandAllSelected(() =>
                                this.onAfterSelect()));
                    });
                } else {
                    this.setState({ loaded: true }, () =>
                        this.expandAllSelected(() =>
                            this.onAfterSelect()));
                }
            });

        // read default history
        props.socket.getSystemConfig()
            .then(config => {
                this.defaultHistory = config && config.common && config.common.defaultHistory;
                if (this.defaultHistory) {
                    return props.socket.getState('system.adapter.' + this.defaultHistory + '.alive')
                        .then(state => {
                            if (!state || !state.val) {
                                this.defaultHistory = '';
                            }
                        });
                }
            })
            .then(() => this.getAdditionalColumns())
            .then(columnsForAdmin => {
                this.calculateColumnsVisibility(null, null, columnsForAdmin);
                this.setState({columnsForAdmin});
            })
            .catch(e => this.showError(e));
    }

    /**
     * @private
     * @param {ioBroker.EmptyCallback} cb
     */
    expandAllSelected(cb) {
        let expanded = [...this.state.expanded];
        let changed = false;
        this.state.selected.forEach(id => {
            const parts = id.split('.');
            let path = [];
            for (let i = 0; i < parts.length - 1; i++) {
                path.push(parts[i]);
                if (!expanded.includes(path.join('.'))) {
                    expanded.push(path.join('.'));
                    changed = true;
                }
            }
        });
        if (changed) {
            expanded.sort();
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectExpanded', JSON.stringify(expanded));
            this.setState({expanded}, cb)
        } else {
            cb && cb();
        }
    }

    /**
     * @private
     * @param {boolean} [isDouble]
     */
    onAfterSelect(isDouble) {
        this.lastSelectedItems = [...this.state.selected];
        if (this.state.selected && this.state.selected.length) {
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectSelected', JSON.stringify(this.lastSelectedItems));

            const name = this.lastSelectedItems.length === 1 ? Utils.getObjectName(this.objects, this.lastSelectedItems[0], null, { language: this.state.lang }) : '';
            this.props.onSelect && this.props.onSelect(this.lastSelectedItems, name, isDouble);
        } else {
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectSelected', '');
            this.setState({selected: []}, () => this.props.onSelect && this.props.onSelect([], ''));
        }
    }

    /**
     * @private
     * @param {import('./types').ObjectBrowserProps} props
     * @param {any} state
     */
    static getDerivedStateFromProps(props, state) {
        const newState = {};
        let changed = false;
        if (props.expertMode !== undefined && props.expertMode !== state.filter.expertMode) {
            changed = true;
            newState.filter = Object.assign({}, state.filter);
            newState.filter.expertMode = props.expertMode;
        }
        return changed ? newState : null;
    }

    /**
     * Called when component is mounted.
     */
    componentDidMount() {
        this.props.socket.subscribeObject('*', this.onObjectChange);
    }

    /**
     * Called when component is unmounted.
     */
    componentWillUnmount() {
        this.props.socket.unsubscribeObject('*', this.onObjectChange);

        // remove all subscribes
        this.subscribes.forEach(pattern => {
            console.log('- unsubscribe ' + pattern);
            this.props.socket.unsubscribeState(pattern, this.onStateChangeBound);
        });

        this.subscribes = [];
    }

    /**
     * Renders the error dialog.
     * @returns {JSX.Element | null}
     */
    renderErrorDialog() {
        return this.state.error ? <Dialog
            open={true}
            maxWidth="sm"
            fullWidth={true}
            onClose={ () => this.setState({error: ''}) }
            aria-labelledby="error-dialog-title"
            aria-describedby="error-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{this.props.title || this.props.t('ra_Error')}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    { this.state.error }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ () => this.setState({error: ''}) } color="primary" autoFocus><IconCheck className={this.props.classes.buttonIcon}/>{ this.props.t('ra_Ok') }</Button>
            </DialogActions>
        </Dialog> : null;
    }

    /**
     * Show the error dialog.
     * @param {any} error
     */
    showError(error) {
        this.setState({error: typeof error === 'object' ? (error && typeof error.toString === 'function' ? error.toString() : JSON.stringify(error)) : error});
    }

    /**
     * Called when an item is selected/deselected.
     * @param {string} toggleItem
     * @param {boolean} [isDouble]
     */
    onSelect(toggleItem, isDouble) {
        if (!this.props.multiSelect) {
            if (this.objects[toggleItem] && (!this.props.types || this.props.types.includes(this.objects[toggleItem].type))) {
                if (this.state.selected[0] !== toggleItem) {
                    this.setState({ selected: [toggleItem] }, () =>
                        this.onAfterSelect(isDouble));
                } else if (isDouble && this.props.onSelect) {
                    this.onAfterSelect(isDouble);
                }
            } else {
                this.setState({selected: []}, () => this.onAfterSelect());
            }
        } else {
            if (this.objects[toggleItem] && (!this.props.types || this.props.types.includes(this.objects[toggleItem].type))) {
                const selected = [...this.state.selected];
                const pos = selected.indexOf(toggleItem);
                if (pos === -1) {
                    selected.push(toggleItem);
                    selected.sort();
                } else if (!isDouble) {
                    selected.splice(pos, 1);
                }

                this.setState({selected}, () =>
                    this.onAfterSelect(isDouble));
            }
        }
    }

    /**
     * @private
     * @param {boolean} isLast
     */
    _renderDefinedList(isLast) {
        const cols = [...this.possibleCols];
        cols.unshift('id');
        if (this.props.columns && !this.props.columns.includes('buttons')) {
            const pos = cols.indexOf('buttons');
            if (pos !== -1) {
                cols.splice(pos, 1);
            }
        }
        return cols
            .filter(id => (isLast && (id === 'val' || id === 'buttons')) || (!isLast && id !== 'val' && id !== 'buttons'))
            .map(id =>
                <ListItem button onClick={() => {
                    if (!this.state.columnsAuto && id !== 'id') {
                        const columns = [...(this.state.columns || [])];
                        const pos = columns.indexOf(id);
                        if (pos === -1) {
                            columns.push(id);
                            columns.sort();
                        } else {
                            columns.splice(pos, 1);
                        }
                        window.localStorage.setItem((this.props.dialogName || 'App') + '.columns', JSON.stringify(columns));
                        this.calculateColumnsVisibility(null, columns);
                        this.setState({columns});
                    }
                }} key={id}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            disabled={id === 'id' || this.state.columnsAuto}
                            checked={ id === 'id' || (this.state.columnsAuto ? this.visibleCols.includes(id) : (this.state.columns && this.state.columns.includes(id)))}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={this.texts['filter_' + id] || this.props.t('ra_'  + id)} />
                    <ListItemSecondaryAction>
                        <FormControl className={ this.props.classes.columnsDialogInputWidth } style={{ marginTop: 0, marginBottom: 0 }} margin="dense">
                            <Input
                                classes={{ underline: 'no-underline' }}
                                placeholder={ this.props.t('ra_Width') }
                                value={ this.state.columnsWidths[id] || '' }
                                onChange={e => {
                                    const columnsWidths = JSON.parse(JSON.stringify(this.state.columnsWidths));
                                    columnsWidths[id] = e.target.value;
                                    window.localStorage.setItem((this.props.dialogName || 'App') + '.columnsWidths', JSON.stringify(columnsWidths));
                                    this.calculateColumnsVisibility(null, null, null, columnsWidths);
                                    this.setState({columnsWidths});
                                }}
                                autoComplete="off"
                            />
                        </FormControl>
                    </ListItemSecondaryAction>
                </ListItem>
            );
    }

    /**
     * Renders the columns selector.
     * @returns {JSX.Element | null}
     */
    renderColumnsSelectorDialog() {
        if (!this.state.columnsSelectorShow) {
            return null;
        } else {
            return <Dialog
                onClose={() => this.setState({columnsSelectorShow: false})}
                open={true}
                classes={{root: Utils.clsx(this.props.classes.dialogColumns, this.props.classes['transparent_' + this.state.columnsDialogTransparent])}}
            >
                <DialogTitle>{this.props.t('ra_Configure visible columns')}</DialogTitle>
                <DialogContent>
                    <FormControlLabel
                        className={this.props.classes.switchColumnAuto}
                        control={<Switch checked={this.state.columnsAuto} onChange={() => {
                            window.localStorage.setItem((this.props.dialogName || 'App') + '.columnsAuto', this.state.columnsAuto ? 'false' : 'true');
                            if (!this.state.columnsAuto) {
                                this.calculateColumnsVisibility(true);
                                this.setState({columnsAuto: true});
                            } else {
                                if (!this.state.columns) {
                                    this.calculateColumnsVisibility(false, [...this.visibleCols]);
                                    this.setState({columnsAuto: false, columns: [...this.visibleCols]});
                                } else {
                                    this.calculateColumnsVisibility(false);
                                    this.setState({columnsAuto: false});
                                }
                            }
                        }} />}
                        label={this.props.t('ra_Auto (no custom columns)')}
                    />
                    <FormControlLabel
                        className={this.props.classes.switchColumnAuto}
                        control={<Switch checked={this.state.foldersFirst} onChange={() => {
                            window.localStorage.setItem((this.props.dialogName || 'App') + '.foldersFirst', this.state.foldersFirst ? 'false' : 'true');
                            this.setState({foldersFirst: !this.state.foldersFirst});
                        }} />}
                        label={this.props.t('ra_Folders always first')}
                    />
                    <Typography classes={{root: this.props.classes.dialogColumnsLabel}}>{this.props.t('ra_Transparent dialog')}</Typography>
                    <Slider classes={{root: this.props.classes.width100}} value={this.state.columnsDialogTransparent} min={20} max={100} step={10} onChange={(event, newValue) =>
                        this.setState({columnsDialogTransparent: newValue})
                    } />
                    <List>
                        {this._renderDefinedList(false)}

                        {this.state.columnsForAdmin && Object.keys(this.state.columnsForAdmin).sort().map(adapter =>
                            this.state.columnsForAdmin[adapter].map(column =>
                                <ListItem button onClick={() => {
                                    if (!this.state.columnsAuto) {
                                        const columns = [...(this.state.columns || [])];
                                        const id = '_' + adapter + '_' + column.path;
                                        const pos = columns.indexOf(id);
                                        if (pos === -1) {
                                            columns.push(id);
                                            columns.sort();
                                        } else {
                                            columns.splice(pos, 1);
                                        }
                                        this.calculateColumnsVisibility(null, columns);
                                        window.localStorage.setItem((this.props.dialogName || 'App') + '.columns', JSON.stringify(columns));
                                        this.setState({columns});
                                    }
                                }} key={adapter + '_' + column.name}>
                                    <ListItemIcon>
                                        <Checkbox
                                            disabled={this.state.columnsAuto}
                                            edge="start"
                                            checked={!this.state.columnsAuto && this.state.columns && this.state.columns.includes('_' + adapter + '_' + column.path)}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={column.name + ' (' + adapter + ')'} />
                                    <ListItemSecondaryAction>
                                        <FormControl className={ this.props.classes.columnsDialogInputWidth } style={{ marginTop: 0, marginBottom: 0 }} margin="dense">
                                            <Input
                                                classes={{ underline: 'no-underline' }}
                                                placeholder={ this.props.t('ra_Width') }
                                                value={ this.state.columnsWidths['_' + adapter + '_' + column.path] || '' }
                                                onChange={e => {
                                                    const columnsWidths = JSON.parse(JSON.stringify(this.state.columnsWidths));
                                                    columnsWidths['_' + adapter + '_' + column.path] = e.target.value;
                                                    window.localStorage.setItem((this.props.dialogName || 'App') + '.columnsWidths', JSON.stringify(columnsWidths));
                                                    this.calculateColumnsVisibility(null, null, null, columnsWidths);
                                                    this.setState({columnsWidths});
                                                }}
                                                autoComplete="off"
                                            />
                                        </FormControl>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        )}
                        {this._renderDefinedList(true)}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.setState({columnsSelectorShow: false})} color="primary">
                        <IconClose className={this.props.classes.buttonIcon}/>{this.texts['close']}
                    </Button>
                </DialogActions>
            </Dialog>
        }
    }

    /**
     * @private
     */
    getAdditionalColumns() {
        return this.props.socket.getAdapters()
            .then(instances => {
                let columnsForAdmin = null;
                // find all additional columns
                instances.forEach(obj =>
                    columnsForAdmin = this.parseObjectForAdmins(columnsForAdmin, obj));

                return columnsForAdmin;
            });
    }

    /**
     * @private
     */
    checkUnsubscribes() {
        // Remove unused subscribed
        for (let i = this.subscribes.length - 1; i >= 0; i--) {
            !this.recordStates.includes(this.subscribes[i]) &&
            this.unsubscribe(this.subscribes[i]);
        }
        this.recordStates = [];
    }

    /**
     * Find an item.
     * @param {string} id
     * @param {string[] | undefined} [_parts]
     * @param {{ data: { name: string; id: string; }; children: never[]; } | null | undefined} [_root]
     * @param {string | undefined} [_partyId]
     * @returns {any}
     */
    findItem(id, _parts, _root, _partyId) {
        _parts = _parts || id.split('.');
        _root = _root || this.root;
        if (!_root || !_parts.length) {
            return null;
        }

        _partyId = (_partyId ? _partyId + '.' : '') + _parts.shift();

        if (_root.children) {
            const item = _root.children.find(i => i.data.id === _partyId);
            if (item) {
                if (item.data.id === id) {
                    return item;
                } else if (_parts.length) {
                    return this.findItem(id, _parts, item, _partyId);
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    /**
     * Called when a state changes.
     * @param {string} id
     * @param {ioBroker.State} state
     */
    onStateChange(id, state) {
        console.log('> stateChange ' + id);
        if (this.states[id]) {
            const item = this.findItem(id);
            if (item && item.data.state) {
                item.data.state = null;
            }
        }
        this.states[id] = state;

        if (!this.pausedSubscribes) {
            if (!this.statesUpdateTimer) {
                this.statesUpdateTimer = setTimeout(() => {
                    this.statesUpdateTimer = null;
                    this.forceUpdate();
                }, 300);
            }
        } else {
            if (this.statesUpdateTimer) {
                clearTimeout(this.statesUpdateTimer);
                this.statesUpdateTimer = null;
            }
        }
    }

    /**
     * @private
     * @param {{ [x: string]: any; }} columnsForAdmin
     * @param {any} obj
     */
    parseObjectForAdmins(columnsForAdmin, obj) {
        if (obj.common && obj.common.adminColumns && obj.common.name) {
            let columns = obj.common.adminColumns;
            if (typeof columns !== 'object') {
                columns = [columns];
            }
            columns = columns.map(item => {
                if (typeof item !== 'object') {
                    return {path: item, name: item.split('.').pop()};
                }

                // string => array
                if (item.objTypes && typeof item.objTypes !== 'object') {
                    item.objTypes = [item.objTypes];
                } else if (!item.objTypes) {
                    item.objTypes = null;
                }

                if (!item.name && item.path) {
                    return {path: item.path, name: item.path.split('.').pop(), width: item.width, edit: !!item.edit, type: item.type, objTypes: item.objTypes};
                }
                if (typeof item.name !== 'object' && item.path) {
                    return {path: item.path, name: item.name, width: item.width, edit: !!item.edit, type: item.type, objTypes: item.objTypes};
                }
                if (!item.path) {
                    console.warn(`Admin columns for ${obj._id} ignored, because path not found`);
                    return null;
                } else {
                    return {path: item.path, name: item.name[this.props.lang] || item.name.en, width: item.width, edit: !!item.edit, type: item.type, objTypes: item.objTypes};
                }
            }).filter(item => item);

            if (columns && columns.length) {
                columnsForAdmin = columnsForAdmin || {};
                columnsForAdmin[obj.common.name] = columns.sort((a, b) => a.path > b.path ? -1 : (a.path < b.path ? 1 : 0));
            }
        } else if (obj.common && obj.common.name && columnsForAdmin && columnsForAdmin[obj.common.name]) {
            delete columnsForAdmin[obj.common.name];
        }
        return columnsForAdmin;
    }

    /**
     * @param {string} id
     * @param {ioBroker.Object} obj
     * @param {import('./types').OldObject} oldObj
     */
    onObjectChange = (id, obj, oldObj) => {
        console.log('> objectChange ' + id);

        this.objects = this.objects || [];

        if (id.startsWith('system.adapter.') && obj && obj.type === 'adapter') {
            let columnsForAdmin = JSON.parse(JSON.stringify(this.state.columnsForAdmin));
            this.parseObjectForAdmins(columnsForAdmin, obj);
            if (JSON.stringify(this.state.columnsForAdmin) !== JSON.stringify(columnsForAdmin)) {
                this.setState({columnsForAdmin});
            }
        }

        if (this.objects[id]) {
            if (obj) {
                this.objects[id] = obj;
            } else {
                delete this.objects[id];
            }
        } else if (this.objects[id]) {
            delete this.objects[id];
        }

        if (!this.objectsUpdateTimer) {
            this.objectsUpdateTimer = setTimeout(() => {
                this.objectsUpdateTimer = null;
                const { info, root } = buildTree(this.objects, this.props);
                this.root = root;
                this.info = info;
                this.lastAppliedFilter = null; // apply filter anew

                if (!this.pausedSubscribes) {
                    this.forceUpdate();
                }
                // else it will be re-rendered when dialog will be closed
            }, 500);
        }
    };

    /**
     * @private
     * @param {string} id
     */
    subscribe(id) {
        if (this.subscribes.indexOf(id) === -1) {
            this.subscribes.push(id);
            console.log('+ subscribe ' + id);
            if (!this.pausedSubscribes) {
                this.props.socket.subscribeState(id, this.onStateChangeBound);
            }
        }
    }

    /**
     * @private
     * @param {string} id
     */
    unsubscribe(id) {
        const pos = this.subscribes.indexOf(id);
        if (pos !== -1) {
            this.subscribes.splice(pos, 1);
            if (this.states[id]) {
                delete this.states[id];
            }
            console.log('- unsubscribe ' + id);
            this.props.socket.unsubscribeState(id, this.onStateChangeBound);

            if (this.pausedSubscribes) {
                console.warn('Unsubscribe during pause?');
            }
        }
    }

    /**
     * @private
     * @param {boolean} isPause
     */
    pauseSubscribe(isPause) {
        if (!this.pausedSubscribes && isPause) {
            this.pausedSubscribes = true;
            this.subscribes.forEach(id => this.props.socket.unsubscribeState(id, this.onStateChangeBound));
        } else if (this.pausedSubscribes && !isPause) {
            this.pausedSubscribes = false;
            this.subscribes.forEach(id => this.props.socket.subscribeState(id, this.onStateChangeBound));
        }
    }

    /**
     * @private
     * @param {string} [name]
     * @param {boolean} [value]
     */
    onFilter(name, value) {
        this.filterTimer = null;
        let filter = {};

        Object.keys(this.filterRefs).forEach(name => {
            if (this.filterRefs[name] && this.filterRefs[name].current) {
                for (let i = 0; i < this.filterRefs[name].current.childNodes.length; i++) {
                    if (this.filterRefs[name].current.childNodes[i].tagName === 'INPUT') {
                        filter[name] = this.filterRefs[name].current.childNodes[i].value;
                        break;
                    }
                }
            }
        });

        if (name) {
            filter[name] = value;
            if (name === 'expertMode') {
                window.localStorage.setItem('App.expertMode', value ? 'true' : 'false');
            }
        }

        filter = Object.assign({}, this.state.filter, filter);

        if (JSON.stringify(this.state.filter) !== JSON.stringify(filter)) {
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectFilter', JSON.stringify(filter));
            this.setState({ filter }, () =>
                this.props.onFilterChanged && this.props.onFilterChanged(filter));
        }
    }

    clearFilter() {
        let filter = {};

        Object.keys(this.filterRefs).forEach(name => {
            if (this.filterRefs[name] && this.filterRefs[name].current) {
                for (let i = 0; i < this.filterRefs[name].current.childNodes.length; i++) {
                    const item = this.filterRefs[name].current.childNodes[i];
                    if (item.tagName === 'INPUT') {
                        filter[name] = '';
                        item.value = '';
                        break;
                    }
                }
            }
        });

        filter = Object.assign({}, this.state.filter, filter);

        if (JSON.stringify(this.state.filter) !== JSON.stringify(filter)) {
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectFilter', JSON.stringify(filter));
            this.setState({ filter, filterKey: this.state.filterKey + 1}, () =>
                this.props.onFilterChanged && this.props.onFilterChanged(filter));
        }
    }

    isFilterEmpty() {
        const someNotEmpty = Object.keys(this.state.filter).find(attr =>
            attr !== 'expertMode' && this.state.filter[attr]);
        return !someNotEmpty;
    }

    /**
     * @private
     * @param {string} name
     */
    getFilterInput(name) {
        return <FormControl
            className={ Utils.clsx(this.props.classes.headerCellInput, this.props.classes.filterInput) }
            key={name + '_' + this.state.filterKey}
            //style={{ marginTop: 0, marginBottom: 0 }}
            margin="dense"
        >
            <Input
                ref={ this.filterRefs[name] }
                classes={{ underline: 'no-underline' }}
                id={ name }
                placeholder={ this.texts['filter_' + name] }
                defaultValue={ this.state.filter[name] }
                onChange={e => {
                    this.filterTimer && clearTimeout(this.filterTimer);
                    this.filterTimer = setTimeout(() => this.onFilter(), 400);
                }}
                autoComplete="off"
            />
        </FormControl>;
    }

    /**
     * @private
     * @param {string} name
     * @param {any[]} values
     */
    getFilterSelect(name, values) {
        const hasIcons = !!values.find(item => item.icon);

        return <Select
            key={name + '_' + this.state.filterKey}
            ref={ this.filterRefs[name] }
            className={ this.props.classes.headerCellInput + ' no-underline' }
            onChange={e => {
                this.filterTimer && clearTimeout(this.filterTimer);
                this.filterTimer = setTimeout(() => this.onFilter(), 400);
            }}
            defaultValue={ this.state.filter[name] || '' }
            inputProps={{ name, id: name }}
            displayEmpty={ true }
        >
            <MenuItem key="empty" value=""><span className={ this.props.classes.selectNone }>{ this.texts['filter_' + name] }</span></MenuItem>
            { values.map(item => {
                let id;
                let name;
                let icon;
                if (typeof item === 'object') {
                    id   = item.value;
                    name = item.name;
                    icon = item.icon;
                } else {
                    id   = item;
                    name = item;
                }

                return <MenuItem className={ this.props.classes.headerCellSelectItem } key={ id } value={ id }>
                    { icon ? icon : (hasIcons ? <div className="itemIcon"/> : null)}
                    { name }
                </MenuItem>;
            }) }
        </Select>;
    }

    /**
     * @private
     */
    getFilterSelectRole() {
        return this.getFilterSelect('role', this.info.roles);
    }

    /**
     * @private
     */
    getFilterSelectRoom() {
        const rooms = this.info.roomEnums.map(id =>
            ({
                name: getName((this.objects[id] && this.objects[id].common && this.objects[id].common.name) || id.split('.').pop()),
                value: id,
            }));

        return this.getFilterSelect('room', rooms);
    }

    /**
     * @private
     */
    getFilterSelectFunction() {
        const func = this.info.funcEnums.map(id =>
            ({name: getName((this.objects[id] && this.objects[id].common && this.objects[id].common.name) || id.split('.').pop()), value: id}));
        return this.getFilterSelect('func', func);

    }

    /**
     * @private
     */
    getFilterSelectType() {
        const types = this.info.types.map(type =>
            ({name: type, value: type, icon: ITEM_IMAGES[type]}));

        return this.getFilterSelect('type', types);
    }

    /**
     * @private
     */
    getFilterSelectCustoms() {
        if (this.info.customs.length) {
            return this.getFilterSelect('customs', this.info.customs);
        } else {
            return null;
        }
    }

    /**
     * @private
     * @param {any} [root]
     * @param {any[]} [expanded]
     */
    onExpandAll(root, expanded) {
        root = root || this.root;
        expanded = expanded || [];

        root.children && root.children.forEach(item => {
            if (item.hasVisibleChildren) {
                expanded.push(item.data.id);
                this.onExpandAll(item, expanded);
            }
        });

        if (root === this.root) {
            expanded.sort();
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectExpanded', JSON.stringify(expanded));

            this.setState({ expanded });
        }
    }

    /**
     * @private
     */
    onCollapseAll() {
        window.localStorage.setItem((this.props.dialogName || 'App') + '.objectExpanded', JSON.stringify([]));
        this.setState({ expanded: [], depth: 0 });
    }

    /**
     * @private
     * @param {any} root
     * @param {number} depth
     * @param {any[]} expanded
     */
    expandDepth(root, depth, expanded) {
        root = root || this.root;
        if (depth > 0) {
            if (root.children) {
                root.children.forEach(item => {
                    if (item.data.visible || item.data.hasVisibleChildren) {
                        if (!binarySearch(expanded, item.data.id)) {
                            expanded.push(item.data.id);
                            expanded.sort();
                        }
                        if (depth - 1 > 0) {
                            this.expandDepth(item, depth - 1, expanded);
                        }
                    }
                });
            }
        }
    }

    /**
     * @private
     * @param {number} depth
     * @param {any[]} expanded
     */
    collapseDepth(depth, expanded) {
        return expanded.filter(id => id.split('.').length <= depth);
    }

    /**
     * @private
     */
    onExpandVisible() {
        if (this.state.depth < 9) {
            const depth = this.state.depth + 1;
            const expanded = [...this.state.expanded];
            this.expandDepth(this.root, depth, expanded);
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectExpanded', JSON.stringify(expanded));
            this.setState({ depth, expanded });
        }
    }

    /**
     * @private
     */
    onCollapseVisible() {
        if (this.state.depth > 0) {
            const depth = this.state.depth - 1;
            const expanded = this.collapseDepth(depth, this.state.expanded);
            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectExpanded', JSON.stringify(expanded));
            this.setState({ depth, expanded });
        }
    }

    /**
     * Renders the toolbar.
     * @returns {JSX.Element}
     */
    getToolbar() {
        return <Toolbar variant="dense" className={this.props.classes.toolbar} key="toolbar">
            { this.props.showExpertButton ? <IconButton key="expertMode" variant="contained" className={ this.props.classes.toolbarButtons } color={ this.state.filter.expertMode ? 'secondary' : 'default' } onClick={ () => this.onFilter('expertMode', !this.state.filter.expertMode) }><IconExpert /></IconButton>: null }

            { !this.props.disableColumnSelector ? <IconButton key="columnSelector" variant="contained" className={ this.props.classes.toolbarButtons } onClick={ () => this.setState({columnsSelectorShow: true}) }><IconColumns /></IconButton>: null }
            { this.state.expandAllVisible ? <IconButton key="expandAll"  variant="contained" className={ this.props.classes.toolbarButtons } onClick={ () => this.onExpandAll() }><IconOpen /></IconButton> : null }
            <IconButton key="collapseAll"     variant="contained" className={ this.props.classes.toolbarButtons } onClick={ () => this.onCollapseAll() }>
                <IconClosed/>
            </IconButton>
            <StyledBadge badgeContent={ this.state.depth } color="secondary">
                <IconButton key="expandVisible"   variant="contained" className={ this.props.classes.toolbarButtons + ' ' + this.props.classes.visibleButtons} onClick={ () => this.onExpandVisible() }><IconOpen /></IconButton>
            </StyledBadge>
            <StyledBadge badgeContent={ this.state.depth } color="secondary">
                <IconButton key="collapseVisible" variant="contained" className={ this.props.classes.toolbarButtons + ' ' + this.props.classes.visibleButtons} onClick={ () => this.onCollapseVisible() }><IconClosed /></IconButton>
            </StyledBadge>
        </Toolbar>;
    }

    /**
     * @private
     * @param {string} id
     */
    toggleExpanded(id) {
        const expanded = JSON.parse(JSON.stringify(this.state.expanded));
        const pos = expanded.indexOf(id);
        if (pos === -1) {
            expanded.push(id);
            expanded.sort();
        } else {
            expanded.splice(pos, 1);
        }

        window.localStorage.setItem((this.props.dialogName || 'App') + '.objectExpanded', JSON.stringify(expanded));

        this.setState({ expanded });
    }

    /**
     * @private
     * @param {Event} e
     * @param {string} text
     */
    onCopy(e, text) {
        e.stopPropagation();
        e.preventDefault();
        copy(text);
        if (text.length < 50) {
            this.setState({ toast: this.props.t('ra_Copied %s', text) });
        } else {
            this.setState({ toast: this.props.t('ra_Copied') });
        }
    }

    /**
     * @param {string} id
     * @param {{ data: { obj: { type: string; }; hasCustoms: any; }; }} item
     * @param {{ cellButtonsButton: string | undefined; cellButtonsButtonAlone: any; cellButtonsButtonIcon: string | undefined; cellButtonsButtonWithCustoms: any; }} classes
     */
    renderColumnButtons(id, item, classes) {
        if (!item.data.obj) {
            return <IconButton className={ Utils.clsx(classes.cellButtonsButton, classes.cellButtonsButtonAlone) }  size="small" aria-label="delete" title={ this.texts.deleteObject }>
                <IconDelete className={ classes.cellButtonsButtonIcon }  />
            </IconButton>;
        }

        return [
            <IconButton key="edit" className={ classes.cellButtonsButton } size="small" aria-label="edit" title={ this.texts.editObject }
                        onClick={ () => {
                            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectSelected', id);
                            this.setState({ editObjectDialog: id});
                        }}>
                <IconEdit className={ classes.cellButtonsButtonIcon } />
            </IconButton>,
            <IconButton key="delete" className={ classes.cellButtonsButton }  size="small" aria-label="delete"
                        onClick={ () => {
                            window.localStorage.setItem((this.props.dialogName || 'App') + '.objectSelected', id);
                        }}
                        title={ this.texts.deleteObject }>
                <IconDelete className={ classes.cellButtonsButtonIcon }  />
            </IconButton>,
            this.props.objectCustomDialog && this.info.hasSomeCustoms && item.data.obj.type === 'state' ? <IconButton
                className={ Utils.clsx(classes.cellButtonsButton, item.data.hasCustoms && classes.cellButtonsButtonWithCustoms)}
                key="custom"
                size="small"
                aria-label="config"
                title={ this.texts.customConfig }
                onClick={ () => {
                    window.localStorage.setItem((this.props.dialogName || 'App') + '.objectSelected', id);

                    this.pauseSubscribe(true);
                    this.props.router && this.props.router.doNavigate(null, 'custom', id);
                    this.setState({ customDialog: [id]});
                }}
            >
                <IconConfig className={ classes.cellButtonsButtonIcon }  />
            </IconButton> : null,
        ];
    }

    /**
     * @private
     * @param {string} id
     */
    readHistory(id) {
        /*interface GetHistoryOptions {
            instance?: string;
            start?: number;
            end?: number;
            step?: number;
            count?: number;
            from?: boolean;
            ack?: boolean;
            q?: boolean;
            addID?: boolean;
            limit?: number;
            ignoreNull?: boolean;
            sessionId?: any;
            aggregate?: 'minmax' | 'min' | 'max' | 'average' | 'total' | 'count' | 'none';
        }*/
        if (window.sparkline &&
            this.defaultHistory &&
            this.objects[id] &&
            this.objects[id].common &&
            this.objects[id].common.custom &&
            this.objects[id].common.custom[this.defaultHistory]) {

            const now = new Date();
            now.setHours(now.getHours() - 24);
            now.setMinutes(0);
            now.setSeconds(0);
            now.setMilliseconds(0);
            let nowMs = now.getTime();

            this.props.socket.getHistory(id, {
                instance: this.defaultHistory,
                start: nowMs,
                end: Date.now(),
                step: 3600000,
                from: false,
                ack: false,
                q: false,
                addID: false,
                aggregate: 'minmax'
            })
                .then(values => {
                    const sparks = window.document.getElementsByClassName('sparkline');

                    for (let s = 0; s < sparks.length; s++) {
                        if (sparks[s].dataset.id === id) {
                            const v = prepareSparkData(values, nowMs);

                            window.sparkline.sparkline(sparks[s], v);
                            break;
                        }
                    }
                })
                .catch(e => this.showError(e));
        }
    }

    /**
     * @private
     * @param {string} id
     * @param {any} item
     * @param {Record<string, any>} classes
     * @returns {JSX.Element | null}
     */
    renderColumnValue(id, item, classes) {
        if (!item.data.obj || !this.states) {
            return null;
        }

        if (!this.states[id]) {
            if (item.data.obj.type === 'state') {
                this.recordStates.push(id);
                this.states[id] = { val: null };
                this.subscribe(id);
            }
            return null;
        } else {
            this.recordStates.push(id);
        }

        const state = this.states[id];
        let info = item.data.state;
        if (!info) {
            info = item.data.state = item.data.state || formatValue(id, state, item.data.obj, this.texts);

            info.valFull = info.valFull.map(item => [
                <div className={ classes.cellValueTooltipTitle } key={ item.t }>{ item.t }:</div>,
                <div className={ classes.cellValueTooltipValue } key={ item.t + '_v' }>{ item.v }</div>,
                !item.nbr ? <br key={ item.t + '_br' }/> : null]);

            if (this.defaultHistory && this.objects[id] && this.objects[id].common && this.objects[id].common.custom && this.objects[id].common.custom[this.defaultHistory]) {
                info.valFull.push(<svg key="sparkline" className="sparkline" data-id={ id } style={ {fill: '#3d85de'} } width="200" height="30" strokeWidth="3"/>);
            }

            const copyText = info.valText.v || '';
            info.val = copyText;

            info.valText = [
                <span key="valText">{ info.valText.v.toString() }</span>,
                info.valText.u ? <span className={ classes.cellValueTextUnit } key="unit">{ info.valText.u }</span> : null,
                info.valText.s !== undefined ? <span  className={ classes.cellValueTextState } key="states">({ info.valText.s })</span> : null,
                <IconCopy className={ Utils.clsx(classes.cellButtonsValueButton, 'copyButton', classes.cellButtonsValueButtonCopy) } onClick={(e) => this.onCopy(e, copyText) } key="cc" />,
                //<IconEdit className={ Utils.clsx(classes.cellButtonsValueButton, 'copyButton', classes.cellButtonsValueButtonEdit) } key="ce" />
            ];
        }

        return <Tooltip title={ info.valFull } classes={ {tooltip: this.props.classes.cellValueTooltip, popper: this.props.classes.cellValueTooltipBox} } onOpen={ () => this.readHistory(id) }>
            <div style={ info.style } className={ classes.cellValueText }>
                { info.valText }
            </div>
        </Tooltip>;
    }

    /**
     * @private
     * @returns {JSX.Element | null}
     */
    renderEnumDialog() {
        if (this.state.enumDialog) {

            const type = this.state.enumDialog.type;
            const item = this.state.enumDialog.item;
            const itemEnums = findEnumsForObjectAsIds(this.info, item.data.id, type === 'room' ? 'roomEnums' : 'funcEnums');

            const enums = (type === 'room' ? this.info.roomEnums : this.info.funcEnums).map(id =>
                ({
                    name: getName((this.objects[id] && this.objects[id].common && this.objects[id].common.name) || id.split('.').pop(), this.props.lang),
                    value: id,
                    icon: getSelectIdIcon(this.objects, id, this.imagePrefix)
                }));

            enums.forEach(item => {
                if (item.icon) {
                    item.icon = <div className={ this.props.classes.enumIconDiv }><img src={ item.icon } className={ this.props.classes.enumIcon } alt={ item.name }/></div>;
                }
            });

            // const hasIcons = !!enums.find(item => item.icon);

            return <Dialog onClose={() => this.setState({enumDialog: null})} aria-labelledby="enum-dialog-title" open={ true }>
                <DialogTitle id="enum-dialog-title">{ type === 'func' ? this.props.t('ra_Define functions') : this.props.t('ra_Define rooms') }</DialogTitle>
                <List classes={{ root: this.props.classes.enumList }}>
                    {
                        enums.map(item => {
                            let id;
                            let name;
                            let icon;

                            if (typeof item === 'object') {
                                id   = item.value;
                                name = item.name;
                                icon = item.icon;
                            } else {
                                id   = item;
                                name = item;
                            }
                            const labelId = `checkbox-list-label-${id}`;

                            return <ListItem className={ this.props.classes.headerCellSelectItem } key={ id } onClick={() => {

                            }}>
                                <ListItemIcon classes={{ root: this.props.classes.enumCheckbox }}>
                                    <Checkbox
                                        edge="start"
                                        checked={ itemEnums.includes(id) }
                                        tabIndex={ -1 }
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={ labelId }>{ name }</ListItemText>
                                { icon ? <ListItemSecondaryAction>{ icon }</ListItemSecondaryAction> : null }
                            </ListItem>;
                        })
                    }
                </List>
            </Dialog>
        } else {
            return null;
        }
    }

    /**
     * @private
     * @param {boolean} [isSave]
     */
    onColumnsEditCustomDialogClose(isSave) {
        if (isSave) {
            let value = this.customColumnDialog.value;
            if (this.customColumnDialog.type === 'boolean') {
                value = value === 'true' || value === true;
            } else if (this.customColumnDialog.type === 'number') {
                value = parseFloat(value);
            }
            this.customColumnDialog = null;
            this.props.socket.getObject(this.state.columnsEditCustomDialog.obj._id)
                .then(obj => {
                    if (this.setCustomValue(obj, this.state.columnsEditCustomDialog.it, value)) {
                        return this.props.socket.setObject(obj._id, obj);
                    } else {
                        throw new Error(this.props.t('ra_Cannot update attribute, because not found in the object'))
                    }
                })
                .then(() => this.setState({columnsEditCustomDialog: null}))
                .catch(e => this.showError(e));
        } else {
            this.customColumnDialog = null;
            this.setState({columnsEditCustomDialog: null});
        }
    }

    /**
     * @private
     */
    renderColumnsEditCustomDialog() {
        if (this.state.columnsEditCustomDialog) {
            if (!this.customColumnDialog) {
                const value = this.getCustomValue(this.state.columnsEditCustomDialog.obj, this.state.columnsEditCustomDialog.it);
                this.customColumnDialog = {
                    type: this.state.columnsEditCustomDialog.it.type || typeof value,
                    initValue: (value === null || value === undefined ? '' : value).toString(),
                    value: (value === null || value === undefined ? '' : value).toString()
                };
            }

            return <Dialog
                onClose={() => this.setState({columnsEditCustomDialog: null})}
                maxWidth="md"
                aria-labelledby="custom-dialog-title" open={ true }>
                <DialogTitle id="custom-dialog-title">{ this.props.t('ra_Edit object field') + ': ' + this.state.columnsEditCustomDialog.obj._id }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.customColumnDialog.type === 'boolean' ?
                            <FormControlLabel
                                control={<Checkbox
                                    onKeyUp={e => e.keyCode === 13 && this.onColumnsEditCustomDialogClose(true)}
                                    defaultChecked={this.customColumnDialog.value === 'true'}
                                    onChange={e => {
                                        this.customColumnDialog.value = e.target.checked.toString();
                                        const changed = this.customColumnDialog.value !== this.customColumnDialog.initValue;
                                        if (changed === !this.state.customColumnDialogValueChanged) {
                                            this.setState({customColumnDialogValueChanged: changed});
                                        }
                                    }}
                                    />}
                                label={this.state.columnsEditCustomDialog.it.name + ' (' + this.state.columnsEditCustomDialog.it.pathText + ')'}
                            />
                            :
                            <TextField
                                defaultValue={this.customColumnDialog.value}
                                fullWidth
                                onKeyUp={e => e.keyCode === 13 && this.onColumnsEditCustomDialogClose(true)}
                                label={this.state.columnsEditCustomDialog.it.name + ' (' + this.state.columnsEditCustomDialog.it.pathText + ')'}
                                onChange={e => {
                                    this.customColumnDialog.value = e.target.value;
                                    const changed = this.customColumnDialog.value !== this.customColumnDialog.initValue;
                                    if (changed === !this.state.customColumnDialogValueChanged) {
                                        this.setState({customColumnDialogValueChanged: changed});
                                    }
                                }}
                                autoFocus
                            />
                        }

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.onColumnsEditCustomDialogClose()}><IconClose className={this.props.classes.buttonIcon}/>{this.props.t('Cancel')}</Button>
                    <Button onClick={() => this.onColumnsEditCustomDialogClose(true)}
                            disabled={!this.state.customColumnDialogValueChanged}
                            color="primary">
                        <IconCheck className={this.props.classes.buttonIcon}/> {this.props.t('Update')}
                    </Button>
                </DialogActions>
            </Dialog>;
        } else {
            return null;
        }
    }

    /**
     * @private
     * @param {any} obj
     * @param {any} it
     */
    getCustomValue(obj, it) {
        if (obj && obj._id && obj._id.startsWith(it.adapter + '.') && it.path.length > 1) {
            const p = it.path;
            let value;
            if (obj[p[0]] && typeof obj[p[0]] === 'object') {
                if (p.length === 2) { // most common case
                    value = obj[p[0]][p[1]];
                } else if (p.length === 3) {
                    value = obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' ? obj[p[0]][p[1]][p[2]] : null;
                } else if (p.length === 4) {
                    value = obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' && obj[p[0]][p[1]][p[2]] ? obj[p[0]][p[1]][p[2]][p[3]] : null;
                } else if (p.length === 5) {
                    value = obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' && obj[p[0]][p[1]][p[2]] && obj[p[0]][p[1]][p[2]][p[3]] ? obj[p[0]][p[1]][p[2]][p[3]][p[4]] : null;
                } else if (p.length === 6) {
                    value = obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' && obj[p[0]][p[1]][p[2]] && obj[p[0]][p[1]][p[2]][p[3]] && obj[p[0]][p[1]][p[2]][p[3]][p[4]] ? obj[p[0]][p[1]][p[2]][p[3]][p[4]][p[5]]  : null;
                }
                if (value === undefined || value === null) {
                    return null;
                } else {
                    return value;
                }
            }
        } else {
            return null;
        }
    }

    /**
     * @private
     * @param {any} obj
     * @param {any} it
     * @param {any} value
     */
    setCustomValue(obj, it, value) {
        if (obj && obj._id && obj._id.startsWith(it.adapter + '.') && it.path.length > 1) {
            const p = it.path;
            if (obj[p[0]] && typeof obj[p[0]] === 'object') {
                if (p.length === 2) { // most common case
                    obj[p[0]][p[1]] = value;
                    return true;
                } else if (p.length === 3) {
                    if (obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object') {
                        obj[p[0]][p[1]][p[2]] = value;
                        return true;
                    }
                } else if (p.length === 4) {
                    if (obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' && obj[p[0]][p[1]][p[2]] && typeof obj[p[0]][p[1]][p[2]] === 'object') {
                        obj[p[0]][p[1]][p[2]][p[3]] = value;
                        return true;
                    }
                } else if (p.length === 5) {
                    if (obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' && obj[p[0]][p[1]][p[2]] && typeof obj[p[0]][p[1]][p[2]] === 'object' && obj[p[0]][p[1]][p[2]][p[3]] && typeof obj[p[0]][p[1]][p[2]][p[3]] === 'object') {
                        obj[p[0]][p[1]][p[2]][p[3]][p[4]] = value;
                        return true;
                    }
                } else if (p.length === 6) {
                    if (obj[p[0]][p[1]] && typeof obj[p[0]][p[1]] === 'object' && obj[p[0]][p[1]][p[2]] && typeof obj[p[0]][p[1]][p[2]] === 'object' && obj[p[0]][p[1]][p[2]][p[3]] && typeof obj[p[0]][p[1]][p[2]][p[3]] === 'object' && obj[p[0]][p[1]][p[2]][p[3]][p[4]] && typeof obj[p[0]][p[1]][p[2]][p[3]][p[4]] === 'object') {
                        obj[p[0]][p[1]][p[2]][p[3]][p[4]][p[5]] = value;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Renders a custom value.
     * @param {any} obj
     * @param {any} it
     * @param {any} item
     * @returns {JSX.Element | null}
     */
    renderCustomValue(obj, it, item) {
        let text = this.getCustomValue(obj, it);
        if (text !== null && text !== undefined) {
            if (it.edit && !this.props.notEditable && (!it.objTypes || it.objTypes.includes(obj.type))) {
                return <div
                    className={Utils.clsx(this.props.classes.columnCustom, this.props.classes.columnCustomEditable, this.props.classes['columnCustom_' + it.align])}
                    onClick={() => this.setState({columnsEditCustomDialog: {item, it, obj}, customColumnDialogValueChanged: false})}>{text}</div>;
            } else {
                return <div
                    className={Utils.clsx(this.props.classes.columnCustom, this.props.classes['columnCustom_' + it.align])}>{text}</div>;
            }
        } else {
            return null;
        }
    }

    /**
     * Renders a leaf.
     * @param {any} item
     * @param {boolean} isExpanded
     * @param {Record<string, any>} classes
     * @param {{ count: number; }} counter
     * @returns {JSX.Element}
     */
    renderLeaf(item, isExpanded, classes, counter) {
        const id = item.data.id;
        counter.count++;
        isExpanded = isExpanded === undefined ? this.state.expanded.includes(id) : isExpanded;

        // icon
        let iconFolder;
        if (item.children) {
            iconFolder = isExpanded ? <IconOpen
                className={ classes.cellIdIconFolder }
                onClick={ () => this.toggleExpanded(id) }
            /> : <IconClosed
                className={ classes.cellIdIconFolder }
                onClick={ () => this.toggleExpanded(id) }
            />;
        } else {
            iconFolder = <IconDocument className={ classes.cellIdIconDocument } />;
        }

        let iconItem = null;
        if (item.data.icon) {
            if (typeof item.data.icon === 'string') {
                iconItem = <img className={ Utils.clsx(classes.cellIdIconOwn, 'iconOwn') } src={ item.data.icon } alt="" />;
            } else {
                iconItem = item.data.icon;
            }
        }

        const obj = item.data.obj;

        const typeImg = (obj && obj.type && ITEM_IMAGES[obj.type]) || <div className="itemIcon" />;

        const paddingLeft = ITEM_LEVEL * item.data.level;

        if (item.data.lang !== this.state.lang) {
            item.data.rooms = findRoomsForObject(this.info, id, this.state.lang).join(', ');
            item.data.funcs = findFunctionsForObject(this.info, id, this.state.lang).join(', ');
            item.data.lang  = this.state.lang;
        }

        const checkbox =
            this.props.multiSelect &&
            this.objects[id] && (!this.props.types || this.props.types.includes(this.objects[id].type)) ?
                <Checkbox
                    className={ classes.checkBox }
                    checked={ this.state.selected.includes(id) }
                /> :
                null;

        /*if (item.data.funcs && item.data.funcs.length) {
            console.log(item.data.funcs);
        }*/

        return <Grid
            container
            direction="row"
            wrap="nowrap"
            className={ Utils.clsx(classes.tableRow, !item.data.visible && classes.filteredOut, this.state.selected.includes(id) && classes.itemSelected) }
            key={ id }
            id={ id }
            onClick={ () => this.onSelect(id) }
            onDoubleClick={ () => {
                if (!item.children) {
                    this.onSelect(id, true);
                } else {
                    this.toggleExpanded(id);
                }
            } }
        >
            <Grid
                container
                wrap="nowrap"
                direction="row"
                className={ classes.cellId }
                style={{ width: this.columnsVisibility.id, paddingLeft }}
            >
                <Grid
                    item
                    container
                    alignItems="center"
                >
                    { checkbox }
                    { iconFolder }
                </Grid>
                <Grid
                    item
                    className={ classes.cellIdSpan }
                    style={ {color: id === 'system' ? COLOR_NAME_SYSTEM : (id === 'system.adapter' ? COLOR_NAME_SYSTEM_ADAPTER : 'inherit')} }
                >
                    { item.data.name }
                </Grid>
                <div className={ classes.grow } />
                <Grid
                    item
                    container
                    alignItems="center"
                >
                    { iconItem }
                </Grid>
                <Grid
                    item
                    container
                    alignItems="center"
                >
                    <IconCopy className={ Utils.clsx(classes.cellCopyButton, 'copyButton') } onClick={(e) => this.onCopy(e, id) } />
                </Grid>
            </Grid>
            {this.columnsVisibility.name    ? <div className={ classes.cellName }    style={{ width: this.columnsVisibility.name }}>{ (item.data && item.data.title) || '' }</div> : null }
            {this.columnsVisibility.type    ? <div className={ classes.cellType }    style={{ width: this.columnsVisibility.type }}>{ typeImg } { obj && obj.type }</div> : null }
            {this.columnsVisibility.role    ? <div className={ classes.cellRole }    style={{ width: this.columnsVisibility.role }}>{ obj && obj.common && obj.common.role }</div> : null }
            {this.columnsVisibility.room    ? <div className={ classes.cellRoom }    style={{ width: this.columnsVisibility.room, cursor: this.props.notEditable ? 'default': 'text'}} onClick={ e => !this.props.notEditable && this.setState({enumDialog: {item, type: 'room'}}) }>{ item.data.rooms }</div> : null }
            {this.columnsVisibility.func    ? <div className={ classes.cellFunc }    style={{ width: this.columnsVisibility.func, cursor: this.props.notEditable ? 'default': 'text'}} onClick={ e => !this.props.notEditable && this.setState({enumDialog: {item, type: 'func'}}) }>{ item.data.funcs }</div> : null }
            {this.adapterColumns.map(it =>    <div className={ classes.cellAdapter } style={{ width: this.columnsVisibility[it.id] }} key={it.id} title={it.adapter + ' => ' + it.pathText}>{ this.renderCustomValue(obj, it, item) }</div>)}
            {this.columnsVisibility.val     ? <div className={ classes.cellValue }   style={{ width: this.columnsVisibility.val,  cursor: this.props.notEditable ? 'default': 'text'}} onClick={ e => {
                if (!this.props.notEditable) {
                    return;
                }
                if (!item.data.obj || !this.states) {
                    return null;
                }
                this.edit = {
                    val:    this.states[id].val,
                    q:      0,
                    ack:    false,
                    id,
                };
                this.setState({ updateOpened: true });
            }}>{ this.renderColumnValue(id, item, classes) }</div> : null }
            {this.columnsVisibility.buttons ? <div className={ classes.cellButtons } style={{ width: this.columnsVisibility.buttons }}>{ this.renderColumnButtons(id, item, classes) }</div> : null }
        </Grid>;
    }

    /**
     * Renders an item.
     * @param {any} root
     * @param {boolean} isExpanded
     * @param {Record<string, any>} classes
     * @param {{ count: any; }} [counter]
     * @returns {JSX.Element[]}
     */
    renderItem(root, isExpanded, classes, counter) {
        const items = [];
        counter = counter || {count: 0};

        root.data.id && items.push(this.renderLeaf(root, isExpanded, classes, counter));

        isExpanded = isExpanded === undefined ? binarySearch(this.state.expanded, root.data.id) : isExpanded;

        if (!root.data.id || isExpanded) {
            if (!this.state.foldersFirst) {
                root.children && items.push(root.children.map(item => {
                    // do not render too many items in column editor mode
                    if (!this.state.columnsSelectorShow || counter.count < 15) {
                        if (item.data.visible || item.data.hasVisibleChildren) {
                            return this.renderItem(item, undefined, classes, counter);
                        }
                    }
                    return null;
                }));
            } else {
                // first only folder
                root.children && items.push(root.children.map(item => {
                    if (item.children) {
                        // do not render too many items in column editor mode
                        if (!this.state.columnsSelectorShow || counter.count < 15) {
                            if (item.data.visible || item.data.hasVisibleChildren) {
                                return this.renderItem(item, undefined, classes, counter);
                            }
                        }
                    }

                    return null;
                }));
                // then items
                root.children && items.push(root.children.map(item => {
                    if (!item.children) {
                        // do not render too many items in column editor mode
                        if (!this.state.columnsSelectorShow || counter.count < 15) {
                            if (item.data.visible || item.data.hasVisibleChildren) {
                                return this.renderItem(item, undefined, classes, counter);
                            }
                        }
                    }
                    return null;
                }));
            }
        }

        return items;
    }

    /**
     * @private
     * @param {boolean} [columnsAuto]
     * @param {string[]} [columns]
     * @param {any} [columnsForAdmin]
     * @param {Record<string, number>} [columnsWidths]
     */
    calculateColumnsVisibility(columnsAuto, columns, columnsForAdmin, columnsWidths) {
        columnsWidths   = columnsWidths   || this.state.columnsWidths;
        columnsForAdmin = columnsForAdmin || this.state.columnsForAdmin;
        columns         = columns         || this.state.columns || [];
        columnsAuto     = typeof columnsAuto !== 'boolean' ? this.state.columnsAuto : columnsAuto;

        columnsWidths = JSON.parse(JSON.stringify(columnsWidths));
        Object.keys(columnsWidths).forEach(name => {
            if (columnsWidths[name]) {
                columnsWidths[name] = parseInt(columnsWidths[name], 10) || 0;
            }
        });

        this.adapterColumns = [];
        const WIDTHS  = SCREEN_WIDTHS[this.props.width].widths;

        if (columnsAuto) {
            this.columnsVisibility = {
                id:      SCREEN_WIDTHS[this.props.width].idWidth,
                name:    this.visibleCols.includes('name')    ? WIDTHS.name    : 0,
                type:    this.visibleCols.includes('type')    ? WIDTHS.type    : 0,
                role:    this.visibleCols.includes('role')    ? WIDTHS.role    : 0,
                room:    this.visibleCols.includes('room')    ? WIDTHS.room    : 0,
                func:    this.visibleCols.includes('func')    ? WIDTHS.func    : 0,
                val:     this.visibleCols.includes('val')     ? WIDTHS.val     : 0,
                buttons: this.visibleCols.includes('buttons') ? WIDTHS.buttons : 0,
            };

            if (this.columnsVisibility.name) {
                let widthSum = this.columnsVisibility.id; // id is always visible
                widthSum += this.columnsVisibility.type;
                widthSum += this.columnsVisibility.role;
                widthSum += this.columnsVisibility.room;
                widthSum += this.columnsVisibility.func;
                widthSum += this.columnsVisibility.val;
                widthSum += this.columnsVisibility.buttons;
                this.columnsVisibility.name = `calc(100% - ${widthSum + 5}px)`;
                this.columnsVisibility.nameHeader = `calc(100% - ${widthSum + 5 + this.state.scrollBarWidth}px)`;
            }
        } else {
            this.columnsVisibility = {
                id:   columnsWidths.id || SCREEN_WIDTHS[this.props.width].idWidth,
                name: columns.includes('name') ? columnsWidths.name || WIDTHS.name || SCREEN_WIDTHS.xl.widths.name : 0,
                type: columns.includes('type') ? columnsWidths.type || WIDTHS.type || SCREEN_WIDTHS.xl.widths.type : 0,
                role: columns.includes('role') ? columnsWidths.role || WIDTHS.role || SCREEN_WIDTHS.xl.widths.role : 0,
                room: columns.includes('room') ? columnsWidths.room || WIDTHS.room || SCREEN_WIDTHS.xl.widths.room : 0,
                func: columns.includes('func') ? columnsWidths.func || WIDTHS.func || SCREEN_WIDTHS.xl.widths.func : 0
            };
            let widthSum = this.columnsVisibility.id; // id is always visible
            if (this.columnsVisibility.name) {
                widthSum += this.columnsVisibility.type;
                widthSum += this.columnsVisibility.role;
                widthSum += this.columnsVisibility.room;
                widthSum += this.columnsVisibility.func;
            }

            if (columnsForAdmin && columns) {
                Object.keys(columnsForAdmin).sort().forEach(adapter =>
                    columnsForAdmin[adapter].forEach(column => {
                        const id = '_' + adapter + '_' + column.path;
                        this.columnsVisibility[id] = columns.includes(id);
                        if (columns.includes(id)) {
                            const item = {
                                adapter,
                                id:      '_' + adapter + '_' + column.path,
                                name:     column.name,
                                path:     column.path.split('.'),
                                pathText: column.path
                            };
                            if (column.edit) {
                                item.edit = true;
                                if (column.type) {
                                    item.type = column.type;
                                }
                                if (column.objTypes) {
                                    item.objTypes = column.objTypes;
                                }
                            }

                            this.adapterColumns.push(item);
                            this.columnsVisibility[id] = columnsWidths[item.id] || column.width || SCREEN_WIDTHS[this.props.width].widths.func || SCREEN_WIDTHS.xl.widths.func;
                            widthSum += this.columnsVisibility[id];
                        } else {
                            this.columnsVisibility[id] = 0;
                        }
                    }));
            }
            this.adapterColumns.sort((a, b) => a.id > b.id ? -1 : (a.id < b.id ? 1: 0));
            this.columnsVisibility.val = columns.includes('val') ? columnsWidths.val || WIDTHS.val || SCREEN_WIDTHS.xl.widths.val : 0;

            // do not show buttons if not desired
            if (!this.props.columns || this.props.columns.includes('buttons')) {
                this.columnsVisibility.buttons = columns.includes('buttons') ? columnsWidths.buttons || WIDTHS.buttons || SCREEN_WIDTHS.xl.widths.buttons : 0;
                widthSum += this.columnsVisibility.buttons;
            }

            if (this.columnsVisibility.name && !columnsWidths.name) {
                widthSum += this.columnsVisibility.val;
                this.columnsVisibility.name = `calc(100% - ${widthSum + 5}px)`;
                this.columnsVisibility.nameHeader = `calc(100% - ${widthSum + 5 + this.state.scrollBarWidth}px)`;
            }
        }
    }

    /**
     * @private
     * @returns {JSX.Element}
     */
    renderHeader() {
        const classes = this.props.classes;

        let filterClearInValue = null;
        if (!this.columnsVisibility.buttons && !this.isFilterEmpty()) {
            filterClearInValue = <IconButton onClick={() => this.clearFilter()} className={classes.buttonClearFilter} title={this.props.t('Clear filter')}>
                <IconClearFilter />
                <IconClose className={classes.buttonClearFilterIcon}/>
            </IconButton>;
        }

        return <div className={ classes.headerRow } >
            <div className={ classes.headerCell } style={{ width: this.columnsVisibility.id }}>{ this.getFilterInput('id') }</div>
            {this.columnsVisibility.name    ? <div className={ classes.headerCell } style={{ width: this.columnsVisibility.nameHeader }}>{ this.getFilterInput('name') }</div> : null }
            {this.columnsVisibility.type    ? <div className={ classes.headerCell } style={{ width: this.columnsVisibility.type }}>{ this.getFilterSelectType() }</div> : null }
            {this.columnsVisibility.role    ? <div className={ classes.headerCell } style={{ width: this.columnsVisibility.role }}>{ this.getFilterSelectRole() }</div> : null }
            {this.columnsVisibility.room    ? <div className={ classes.headerCell } style={{ width: this.columnsVisibility.room }}>{ this.getFilterSelectRoom() }</div> : null }
            {this.columnsVisibility.func    ? <div className={ classes.headerCell } style={{ width: this.columnsVisibility.func }}>{ this.getFilterSelectFunction() }</div> : null }
            {this.adapterColumns.map(item =>  <div className={ Utils.clsx(classes.headerCell, classes.headerCellValue) } style={{ width: this.columnsVisibility[item.id] }} title={item.adapter} key={item.id}>{ item.name }</div>)}
            {this.columnsVisibility.val     ? <div className={ Utils.clsx(classes.headerCell, classes.headerCellValue) } style={{ width: this.columnsVisibility.val}}>{ this.props.t('ra_Value') }{filterClearInValue}</div> : null }
            {this.columnsVisibility.buttons ? <div className={ classes.headerCell } style={{ width: this.columnsVisibility.buttons }}> { this.getFilterSelectCustoms() }</div> : null }
        </div>;
    }

    /**
     * @private
     * @returns {JSX.Element}
     */
    renderToast() {
        return <Snackbar open={ !!this.state.toast } autoHideDuration={ 3000 } onClick={ () => this.setState({ toast: '' }) } onClose={ () => this.setState({ toast: '' }) }>
            <Alert color="info" severity="success" >{ this.state.toast }</Alert>
        </Snackbar>;
    }

    /**
     * Called when component is updated.
     */
    componentDidUpdate() {
        if (this.tableRef.current) {
            const scrollBarWidth = this.tableRef.current.offsetWidth - this.tableRef.current.clientWidth;
            if (this.state.scrollBarWidth !== scrollBarWidth) {
                setTimeout(() => this.setState({ scrollBarWidth }), 100);
            } else {
                if (!this.selectedFound && ((this.state.selected && this.state.selected[0]) || this.lastSelectedItems)) {
                    const node = window.document.getElementById((this.state.selected && this.state.selected[0]) || this.lastSelectedItems);
                    node && node.scrollIntoView();
                    this.selectedFound = true;
                }
            }
        }
    }

    /**
     * @private
     * @returns {JSX.Element | null}
     */
    renderCustomDialog() {
        if (this.state.customDialog && this.props.objectCustomDialog) {
            const ObjectCustomDialog = this.props.objectCustomDialog;

            return <ObjectCustomDialog
                objectIDs={ this.state.customDialog }
                expertMode={ this.state.filter.expertMode }
                t={ this.props.t }
                lang={ this.props.lang }
                socket={ this.props.socket }
                themeName={ this.props.themeName }
                objects={ this.objects }
                customsInstances={ this.info.customs }
                onClose={ () => {
                    this.pauseSubscribe(false);
                    this.setState({ customDialog: null });
                    this.props.router && this.props.router.doNavigate('tab-objects');
                }}
            />;
        } else {
            return null;
        }
    }

    /**
     * @private
     * @param {Partial<ioBroker.State>} valAck
     */
    onUpdate(valAck) {
        this.props.socket.setState(this.edit.id, {val: valAck.val, ack: valAck.ack, q: valAck.q || 0})
            .catch(e => this.showError('Cannot write value: ' + e));
    }

    /**
     * @private
     * @returns {JSX.Element | null}
     */
    renderEditObjectDialog() {
        if (!this.state.editObjectDialog || !this.props.objectBrowserEditObject) {
            return null;
        }
        const ObjectBrowserEditObject = this.props.objectBrowserEditObject;

        return <ObjectBrowserEditObject
            obj={ this.objects[this.state.editObjectDialog] }
            themeName={ this.props.themeName }
            t={ this.props.t }
            expertMode={ this.state.filter.expertMode }
            onClose={ obj => {
                this.setState({editObjectDialog: ''});
                if (obj) {
                    this.props.socket.setObject(obj._id, obj)
                        .catch(e => this.showError('Cannot write object: ' + e));
                }
            }}
        />
    }

    /**
     * @private
     * @returns {JSX.Element | null}
     */
    renderEditValueDialog() {
        if (!this.state.updateOpened || !this.props.objectBrowserValue) {
            return null;
        }

        const type = (this.objects[this.edit.id].common && this.objects[this.edit.id].common.type) ?
            this.objects[this.edit.id].common.type : typeof this.edit.val;

        const ObjectBrowserValue = this.props.objectBrowserValue;

        return <ObjectBrowserValue
            t={ this.props.t }
            type={ type }
            expertMode={ this.state.filter.expertMode }
            value={ this.edit.val }
            onClose={ res => {
                this.setState({ updateOpened: false });
                res && this.onUpdate(res)
            }}
        />;
    }

    /**
     * The rendering method of this component.
     * @returns {JSX.Element}
     */
    render() {
        this.recordStates = [];
        this.unsubscribeTimer && clearTimeout(this.unsubscribeTimer);

        // apply filter if changed
        const jsonFilter = JSON.stringify(this.state.filter);
        if (this.lastAppliedFilter !== jsonFilter && this.objects && this.root) {
            const counter = {count: 0};

            applyFilter(this.root, this.state.filter, this.state.lang, this.objects, null, counter, this.props.customFilter);

            if (counter.count < 500 && !this.state.expandAllVisible) {
                setTimeout(() => this.setState({ expandAllVisible: true }));
            } else if (counter.count >= 500 && this.state.expandAllVisible) {
                setTimeout(() => this.setState({ expandAllVisible: false }));
            }

            this.lastAppliedFilter = jsonFilter;
        }

        this.unsubscribeTimer = setTimeout(() => {
            this.unsubscribeTimer = null;
            this.checkUnsubscribes();
        }, 200);

        if (!this.state.loaded) {
            return <CircularProgress key={this.props.dialogName + '_c'}/>;
        } else {
            const classes = this.props.classes;
            const items = this.renderItem(this.root, undefined, classes);

            return <TabContainer key={this.props.dialogName}>
                <TabHeader>
                    { this.getToolbar() }
                </TabHeader>
                <TabContent>
                    { this.renderHeader() }
                    <div className={ this.props.classes.tableDiv } ref={ this.tableRef }>
                        { items }
                    </div>
                </TabContent>
                { this.renderToast() }
                { this.renderColumnsEditCustomDialog() }
                { this.renderColumnsSelectorDialog() }
                { this.renderCustomDialog() }
                { this.renderEditValueDialog() }
                { this.renderEditObjectDialog() }
                { this.renderEnumDialog() }
                { this.renderErrorDialog() }
            </TabContainer>;
        }
    }
}

ObjectBrowser.propTypes = {
    dialogName: PropTypes.string, // where to store settings in localStorage
    classes: PropTypes.object,
    defaultFilters: PropTypes.object,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    onSelect: PropTypes.func,
    onFilterChanged: PropTypes.func,
    socket: PropTypes.object,
    showExpertButton: PropTypes.bool,
    expertMode: PropTypes.bool,
    imagePrefix: PropTypes.string,
    themeName: PropTypes.string,
    themeType: PropTypes.string,
    t: PropTypes.func,
    lang: PropTypes.string.isRequired,
    multiSelect: PropTypes.bool,
    notEditable: PropTypes.bool,
    foldersFirst: PropTypes.bool,
    disableColumnSelector: PropTypes.bool,

    // components
    objectCustomDialog: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    customFilter: PropTypes.object, // optional {common: {custom: true}} or {common: {custom: 'sql.0'}}
    objectBrowserValue: PropTypes.object,
    objectBrowserEditObject: PropTypes.object,
    router: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    types: PropTypes.array,   // optional ['state', 'instance', 'channel']
    columns: PropTypes.array, // optional ['name', 'type', 'role', 'room', 'func', 'val', 'buttons']
};

/** @type {typeof ObjectBrowser} */
const _export = withWidth()(withStyles(styles)(ObjectBrowser));
export default _export;