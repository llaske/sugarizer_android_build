/*! Sugarizer 2020-03-14 */
define(["sugar-web/env"],function(a){"use strict";describe("Environment object",function(){it("should have valid properties",function(){spyOn(a,"isStandalone").andReturn(!1);var b;runs(function(){a.getEnvironment(function(a,c){b=c})}),waitsFor(function(){return void 0!==b},"should get sugar environment"),runs(function(){expect(b.bundleId).not.toBeUndefined(),expect(b.activityId).not.toBeUndefined(),expect(b.activityName).not.toBeUndefined()})})})});