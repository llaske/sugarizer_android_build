function LineSegment(t,i){if((this.point1="undefined"===t?new Point:t,this.point2="undefined"===i?new Point:i,!this.point1.isZero()&&!this.point2.isZero()||this.point2.isZero()&&!this.point1.isZero())&&1===this.point1.compare(this.point2)){var n=this.point1;this.point1=this.point2,this.point2=n}}LineSegment.prototype.dup=function(){return new LineSegment(this.point1.dup(),this.point2.dup())},LineSegment.prototype.length=function(){return this.point1.distance(this.point2)},LineSegment.prototype.direction=function(){return this.point2.dup().subtract(this.point1)},LineSegment.prototype.lineParameters=function(){var t=[];if(this.point1.x.eq(this.point2.x))t[0]=1,t[1]=0,t[2]=this.point1.x.dup().neg().toFloat();else if(this.point1.y.eq(this.point2.y))t[0]=0,t[1]=1,t[2]=this.point1.y.dup().neg().toFloat();else{var i=this.direction();t[0]=i.toFloatX()/i.toFloatY(),t[1]=-1,t[2]=this.point2.determinant(this.point1).toFloat()/i.toFloatX()}return t},LineSegment.prototype.eq=function(t){return this.point1.eq(t.point1)&&this.point2.eq(t.point2)||this.point2.eq(t.point1)&&this.point1.eq(t.point2)},LineSegment.prototype.compare=function(t){var i=this.point1.compare(t.point1),n=this.point2.compare(t.point2);if("undefined"!==i&&"undefined"!==n)return 0!=i?i:n;console.log("Comparison between the segments is not possible!")};var compareLineSegments=function(t,i){return t.compare(i)};LineSegment.prototype.split=function(t){if(0===t.length)return[this];t=t.sort(comparePoints);var i,n=[];for(n[0]=new LineSegment(this.point1,t[0]),i=1;i<t.length;i++)n[i]=new LineSegment(t[i-1],t[i]);return n[i]=new LineSegment(t[i-1],this.point2),n},LineSegment.prototype.projectedParameter=function(t){if(this.point1.eq(this.point2))return 1;var i=t.dup().subtract(this.point1),n=this.direction();return i.dotProduct(n).toFloat()/n.dotProduct(n).toFloat()},LineSegment.prototype.onSegment=function(t){if(t.eq(this.point1)||t.eq(this.point2)||this.point1.eq(this.point2))return!1;if(0===relativeOrientation(this.point1,this.point2,t)){var i=this.projectedParameter(t);return i>=0&&i<=1}return!1},LineSegment.prototype.onSegmentIncludingEndpoints=function(t){if(t.eq(this.point1)||t.eq(this.point2)||this.point1.eq(this.point2))return!0;if(0===relativeOrientation(this.point1,this.point2,t)){var i=this.projectedParameter(t);return i>=0&&i<=1}return!1},LineSegment.prototype.intersectsOrientations=function(t){var i=relativeOrientation(this.point1,this.point2,t.point1),n=relativeOrientation(this.point1,this.point2,t.point2),e=relativeOrientation(t.point1,t.point2,this.point1),o=relativeOrientation(t.point1,t.point2,this.point2);return i!=n&&e!=o},LineSegment.prototype.intersectsIncludingSegment=function(t){return!(this.point1.eq(t.point1)||this.point2.eq(t.point1)||this.point1.eq(t.point2)||this.point2.eq(t.point2))&&this.intersectsOrientations(t)},LineSegment.prototype.intersects=function(t){return!(this.onSegmentIncludingEndpoints(t.point1)||this.onSegmentIncludingEndpoints(t.point2)||t.onSegmentIncludingEndpoints(this.point1)||t.onSegmentIncludingEndpoints(this.point2))&&this.intersectsOrientations(t)},LineSegment.prototype.angleTo=function(t){var i,n;if(this.point1.eq(t.point1))i=this.direction(),n=t.direction();else if(this.point1.eq(t.point2))i=this.direction(),n=t.direction().scale(-1);else if(this.point2.eq(t.point1))i=this.direction().scale(-1),n=t.direction();else{if(!this.point2.eq(t.point2))return;i=this.direction().scale(-1),n=t.direction().scale(-1)}return i.angleTo(n)};