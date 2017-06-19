var mapsCounter = 0;
var _eventsViewArray = new Array();

function EventsView(elementId, mapPanelId, geomappingService, geoLatitude, geoLongitude, showLocationPin, allowMapDragging, defaultZoomLevel)
{
    this._elementId = elementId;
    this._mapPanelId = mapPanelId;
    this._geomappingService = geomappingService;
    this._geoLatitude = geoLatitude;
    this._geoLongitude = geoLongitude;
    this._showLocationPin = showLocationPin;
    this._allowMapDragging = allowMapDragging;
    this._defaultZoomLevel = defaultZoomLevel;
}

EventsView.Create = function (elementId, mapPanelId, geomappingService, geoLatitude, geoLongitude, showLocationPin, allowMapDragging, defaultZoomLevel)
{
    _eventsViewArray[mapsCounter] = new EventsView(elementId, mapPanelId, geomappingService, geoLatitude, geoLongitude, showLocationPin, allowMapDragging, defaultZoomLevel);
    mapsCounter += 1;
}

window.onload = function()
{
    if(_eventsViewArray.length > 0){
        for(i in _eventsViewArray)
        {
            DrawMap(i);
        }
    }
}

function DrawMap(mapIndex)
{
    var _eventView = _eventsViewArray[mapIndex];
    
    var showLocationPin = _eventView._showLocationPin.toLowerCase() == 'true';
    var allowMapDragging = _eventView._allowMapDragging.toLowerCase() == 'true';
    var defaultZoomLevel = STREET_ZOOM;
    switch(_eventView._defaultZoomLevel)
    {
        case 'STREET_ZOOM':
            defaultZoomLevel = STREET_ZOOM;
            break;
        case 'CITY_ZOOM':
            defaultZoomLevel = CITY_ZOOM;
            break;
        case 'STATE_ZOOM':
            defaultZoomLevel = STATE_ZOOM;
            break;
        case 'COUNTRY_ZOOM':
            defaultZoomLevel = COUNTRY_ZOOM;
            break;
    }
    
    var _geomapping = new Geomapping(_eventView._geomappingService, _eventView._mapPanelId);
    if(_geomapping != null)
        _geomapping.ShowMap(new GeoPoint(_eventView._geoLongitude, _eventView._geoLatitude), defaultZoomLevel, showLocationPin, allowMapDragging);
}

// expandable list mode
function ToggleFullEventInfo(fullEventInfoId, mapIndex)
{
    var fullEventInfo = document.getElementById(fullEventInfoId);
    if(fullEventInfo.style.display == 'none')
        fullEventInfo.style.display = '';
    else
        fullEventInfo.style.display = 'none';   
    
    if(mapIndex > -1)    
        DrawMap(mapIndex);
}