import 'package:flutter_riverpod/flutter_riverpod.dart';

class User {
  final String email;
  final String name;
  final String role;
  final String avatar;

  User({
    required this.email,
    required this.name,
    required this.role,
    required this.avatar
  });
}

class UserNotifier extends StateNotifier<User?> {
  UserNotifier() : super(null);

  void setUser(User user) {
    state = user;
  }

  void clearUser() {
    state = null;
  }
}

final userProvider = StateNotifierProvider<UserNotifier, User?>((ref) {
  return UserNotifier();
});