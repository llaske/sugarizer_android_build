/*! Sugarizer 2020-03-14 */
define(["sugar-web/dictstore","sugar-web/env"],function(a,b){"use strict";describe("dictstore on standalone mode",function(){beforeEach(function(){spyOn(b,"isStandalone").andReturn(!0)}),describe("init method",function(){it("should execute callback",function(){var b=jasmine.createSpy();a.init(b),expect(b).toHaveBeenCalled()}),it("should maintain localStorage",function(){localStorage.testKey="test",a.init(function(){}),expect(localStorage.testKey).toBe("test")})}),describe("save method",function(){it("should just execute the callback",function(){var b;localStorage.test_key="test",runs(function(){b=!1,a.save(function(){b=!0})}),waitsFor(function(){return!0===b},"The callback should executed"),runs(function(){expect(localStorage.test_key).toBe("test")})})})})});