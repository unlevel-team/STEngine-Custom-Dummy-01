"use strict";

/**
 * ST ngnCustom Dummy01
 * 
 * <pre>
 * Custom engine for made some tests..
 * 
 * </pre>
 * 
 * 
 */


/**
 * STngnCustom_Dummy01 configuration object.
 * 
 * @typedef {Object} Config
 * @memberof st.ngn.STngnCustom_Dummy01
 * 
 * @type Object
 * @property {boolean} showTime - Show current time.
 * @property {boolean} showDeltaTime - Show time interval time.
 * @property {number} ticks - Number of 'ticks' interval.
 * 
 * 
 */


/**
 * ST ngnCustom Dummy01
 * 
 * @class
 * @memberof st.ngn
 * 
 */
class STngnCustom_Dummy01 {
	
	
	/**
	 * @constructs STngnCustom_Dummy01
	 * 
	 * @param {object} options - Options object
	 * @param {st.ngn.STngnCustom_Dummy01.Config} options.config - Configuration object
	 */
	constructor(options) {
		
		if (options === undefined) {
			options = {};
		}
		
		let _config = {};
		if (options.config === undefined) {
			_config = options.config;
		}
		
		
		let _actEngine = this;
		
		_actEngine._config  = _config;
		_actEngine.eventEmitter = null;
		
		
		_actEngine.name = "STngnCustom_Dummy01";
		_actEngine._lastTime = null;
		_actEngine._ticks = 0;
		
		_actEngine._options = {
			'showTime': true,
			'showDeltaTime': true,
			'ticks': 3
		};


	}

	
	initialize() {
		
		let _ngn = this;

		
		/** 
		 * Import EventEmitter
		 * @ignore
		 */
		let _EventEmitter = require('events').EventEmitter;
		_ngn.eventEmitter = new _EventEmitter(); 
		
		let _config = _ngn._config
		let _options = _ngn._options;
		
		if (_config.showTime === false) {
			_options.showTime = false;
		}
		
		if (_config.showDeltaTime === false) {
			_options.showDeltaTime = false;
		}

		if (_config.ticks !== undefined) {
			_options.ticks = _config.ticks;
		}

	
		_ngn._mapEngineEvents();
	}
	
	
	_mapEngineEvents(options) {
		
		if (options === undefined) {
			options = {};
		}

		
		let _ngn = this;
		if (options.engine !== undefined) {
			_ngn = options.engine;
		}
		
		_ngn.eventEmitter.on('Main Loop Tick', function(_data) {
			
			_ngn._event_MainLoopTick({
				'engine': _ngn,
				'data': _data
			});
			
		});


	}
	
	
	_event_MainLoopTick(options) {
		
		let _ngn = this;
		if (options.engine !== undefined) {
			_ngn = options.engine;
		}
		
		let _options = _ngn._options;
		
		let _data = options.data;
		
		
		console.log('<~i~> STngnCustom_Dummy01 (_event_MainLoopTick):');	// TODO REMOVE DEBUG LOG

		
		_ngn._ticks++;
		
		if (_ngn._ticks >= _options.ticks) {
			
			_ngn._ticks = 0;
			_ngn._lastTime = new Date().getTime();
			
			console.log('<~i~> STngnCustom_Dummy01 (info):');	// TODO REMOVE DEBUG LOG

		  
			if (_options.showTime === true) {
				console.log(' <~~~> Time: ' + _ngn._lastTime);	// TODO REMOVE DEBUG LOG
			}
			
			if (_options.showDeltaTime === true) {
				if (_ngn._deltaTimeRef !== undefined) {
					let _deltaTime = _ngn._lastTime - _ngn._deltaTimeRef;
					console.log(' <~~~> DetalTime: ' + _deltaTime );	// TODO REMOVE DEBUG LOG
				}
				_ngn._deltaTimeRef = _ngn._lastTime;
			}
			
		}
		
	}
	
	
	/**
	 * Get options of engine
	 * 
	 * @param {object} options - Options
	 * @param {object} [options.engine] - Engine object
	 */
	getOptions(options) {
		
		let _ngn = this;
		
		if (options === undefined) {
			options = {};
		}
		
		if (options.engine !== undefined) {
			_ngn = options.engine;
		}
		
		return _ngn._options;
		
	}
	
	
	/**
	 * Get options of engine using the interface
	 * 
	 * @param {object} options - Options
	 * @param {object} options.ngnInterface - Engine interface
	 */
	_getOptions(options) {
		
		if (options === undefined) {
			options = {};
		}
		
		if (options.ngnInterface === undefined) {
			throw 'ngnInterface is required.';
		}
		let _ngnInterface = options.ngnInterface;
		
		let _ngn = _ngnInterface.custom_engine;
		return _ngn.getOptions({
			'engine': _ngn
		});

	}
	
	
	/**
	 * Set options
	 * 
	 * @param {object} options - Options object
	 * @param {object} [options.engine] - Engine object
	 * @param {object} options.options - Options object
	 * @param {number} [options.options.ticks] - Ticks 
	 * @param {boolean} [options.options.showTime] - Show time
	 * @param {boolean} [options.options.showDeltaTime] - Show delta time 
	 */
	setOptions(options) {
		
		let _ngn = this;
		
		if (options === undefined) {
			options = {};
		}
		
		if (options.engine !== undefined) {
			_ngn = options.engine;
		}

		let _options = {};
		if (options.options !== undefined) {
			_options = options.options;
		}
		
		/*
		if (stSensor.state === stSensor.CONSTANTS.States.Working) {
			throw "Bad sensor state.";
		}
		*/
		
		let _snsOptions = _ngn._options;
		
		if (_options.ticks) {
			_snsOptions.ticks = _options.ticks;
		}
		
		if (_options.showTime !== undefined) {
			_snsOptions.showTime = _options.showTime;
		}
		
		if (_options.showDeltaTime !== undefined) {
			_snsOptions.showDeltaTime = _options.showDeltaTime;
		}
		
	}

	
	/**
	 * Set options using the interface
	 * 
	 * @param {object} options - Options
	 * @param {object} options.ngnInterface - Engine interface
	 * @param {object} options.ngnOptions - Engine options
	 */
	_setOptions(options) {

		if (options === undefined) {
			options = {};
		}
		
		if (options.ngnInterface === undefined) {
			throw 'ngnInterface options is required.';
		}
		let _ngnInterface = options.ngnInterface;
		
		let _ngn = _ngnInterface.custom_engine;
		_ngn.setOptions({
			'engine': _ngn,
			'options': options.ngnOptions
		});

		
	}
	
	
	
	
}


/**
 * Returns an engine interface for use with ST library
 * 
 * <pre>
 * - The library should return a method named 'get_NGNInterface'
 * </pre>
 * 
 * @param {Object} options - options
 * @param {Object} options.config - Configuration 
 * 
 * @returns {st.ngn.baseEngines.EngineInterface}
 */
function _get_NGNInterface (options) {
	
	if (options === undefined ||
			options === null) {
		options = {};
	}
	
	
	/*
	// reference library for specific methods... 
	
	if (options.st === undefined) {
		throw 'SomeThings library no fonud';
	}
	let _st = options.st;
	*/
	
	console.log('<~i~> STngnCustom_Dummy01 (_get_NGNInterface):');	// TODO REMOVE DEBUG LOG
	console.log(options);	// TODO REMOVE DEBUG LOG

	if (options.config.bngnOptions === undefined) {
		throw 'config.bngnOptions option is required.';
	}
	console.log(options.config.bngnOptions);	// TODO REMOVE DEBUG LOG
	let _bngnOptions = options.config.bngnOptions;
	
	// Set engine type
	let _type = null;
	
	switch (_bngnOptions.type) {
		case 'vsensor':
			_type = 'sensor';
			break;
		case 'vactuator':
			_type = 'actuator';
			break;
		default:
			throw 'Bad config.bngnOptions.type.';
			// break;
	}
	
	
	let _ngnDummy01 = new STngnCustom_Dummy01(options.config);
	_ngnDummy01.initialize();

	let _ngnInterface = {
		'name': _ngnDummy01.name,
		'type': _type,
		'eventEmitter': _ngnDummy01.eventEmitter,

		'baseNGN': 'SimpleLoop',
		
		'custom_engine': _ngnDummy01,
		'getOptions': _ngnDummy01._getOptions,
		'setOptions': _ngnDummy01._setOptions
	
	};

	
	return _ngnInterface;
	
}


let _lib = {
	'get_NGNInterface': _get_NGNInterface
};


module.exports = _lib;

