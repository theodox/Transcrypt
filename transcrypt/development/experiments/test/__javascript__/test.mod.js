	(function () {
		var __name__ = '__main__';
		var b = bytes ('bike');
		var s = bytes ('shop', 'utf8');
		var e = bytes ('');
		var bb = bytearray (list ([0, 1, 2, 3, 4]));
		var bc = bytes (tuple ([5, 6, 7, 8, 9]));
		var bps = __add__ (__add__ (b, bytes ('pump')), s);
		var bps3 = __add__ (__mul__ (3, bps), bytes (' '));
		var aBps3 = __add__ (__mul__ (bps, 3), bytes (' '));
		var l = __add__ (list ([1, 2, 3]), list ([4, 5, 6]));
		var formatCheck = function (aBytes) {
			print ((function () {
				var __accu0__ = [];
				var __iterable0__ = aBytes;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var aByte = __iterable0__ [__index0__];
					__accu0__.append (int (aByte));
				}
				return __accu0__;
			}) ());
		};
		formatCheck (b);
		formatCheck (s);
		formatCheck (e);
		formatCheck (bb);
		formatCheck (bc);
		formatCheck (bps);
		formatCheck (bps3);
		formatCheck (aBps3);
		__call__ (formatCheck, null, __add__ (bb, bc));
		__call__ (formatCheck, null, __add__ (__add__ (__call__ (bytearray, null, 'ding', 'utf8'), bytes ('dang')), __call__ (bytes, null, 'dong', 'utf8')));
		formatCheck (l);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.aBps3 = aBps3;
			__all__.b = b;
			__all__.bb = bb;
			__all__.bc = bc;
			__all__.bps = bps;
			__all__.bps3 = bps3;
			__all__.e = e;
			__all__.formatCheck = formatCheck;
			__all__.l = l;
			__all__.s = s;
		__pragma__ ('</all>')
	}) ();
