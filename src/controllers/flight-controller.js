const { StatusCodes } = require('http-status-codes');

const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /flights
 * req-body {
 * flightNumber: 'UK 808',
 * airplaneId: 'a380',
 * departureAirportId: 'DEL',
 * arrivalAirportId: 'MUM',
 * arrivalTime: '2025-10-01T10:00:00Z',
 * departureTime: '2025-10-01T12:00:00Z',
 * price: 5000,
 * boardingGate: '12A',
 * totalSeats: 120
 * }
 */

async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createFlight
}

