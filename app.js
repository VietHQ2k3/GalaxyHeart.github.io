
  var sdf = `
  // http://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm

  float sdSphere( vec3 p, float s )
  {
    return length(p)-s;
  }
  
  // honestly stolen from here https://www.shadertoy.com/view/MlGGDh
  mat3 rotationMatrix(vec3 m,float a) {
      m = normalize(m);
      float c = cos(a),s=sin(a);
      return mat3(
        c+(1.-c)*m.x*m.x,     (1.-c)*m.x*m.y-s*m.z, (1.-c)*m.x*m.z+s*m.y,
        (1.-c)*m.x*m.y+s*m.z, c+(1.-c)*m.y*m.y,     (1.-c)*m.y*m.z-s*m.x,
        (1.-c)*m.x*m.z-s*m.y, (1.-c)*m.y*m.z+s*m.x, c+(1.-c)*m.z*m.z);
  }
  
  mat3 rotate(vec3 val){
    mat3 matX = rotationMatrix(vec3(1, 0, 0), val.x);
    mat3 matY = rotationMatrix(vec3(0, 1, 0), val.y);
    mat3 matZ = rotationMatrix(vec3(0, 0, 1), val.z);
    return matX * matY * matZ;
  }
`;

