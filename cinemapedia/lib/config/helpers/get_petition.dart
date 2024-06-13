// ignore_for_file: avoid_print

import 'package:dio/dio.dart';

class GetPetition {
  final _dio = Dio();

  Future<Map<String, dynamic>> getInfo(String idUser) async {
    try {
      final response = await _dio.get("http://127.0.0.1:8000/api/login/$idUser");
      print(response.data);
      return response.data as Map<String, dynamic>;
    } catch (e) {
      print("Error fetching user info: $e");
      rethrow;
    }
  }
}