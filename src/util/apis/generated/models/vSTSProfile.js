/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VSTSProfile class.
 * @constructor
 * VSTS user profile
 *
 * @member {string} [id] Profile id
 * 
 * @member {string} [displayName] Profile display name
 * 
 * @member {string} [publicAlias] Profile alias
 * 
 * @member {string} [emailAddress] Profile email
 * 
 */
function VSTSProfile() {
}

/**
 * Defines the metadata of VSTSProfile
 *
 * @returns {object} metadata of VSTSProfile
 *
 */
VSTSProfile.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VSTSProfile',
    type: {
      name: 'Composite',
      className: 'VSTSProfile',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        publicAlias: {
          required: false,
          serializedName: 'publicAlias',
          type: {
            name: 'String'
          }
        },
        emailAddress: {
          required: false,
          serializedName: 'emailAddress',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VSTSProfile;
