import 'package:flutter/material.dart';
import 'package:kynkoupons/features/home/providers/user_provider.dart';
import 'package:provider/provider.dart';

class RewardProgress extends StatelessWidget {
  const RewardProgress({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final points = context.watch<UserProvider>().rewardPoints;
    final nextTier = (points ~/ 1000 + 1) * 1000;
    final progress = (points % 1000) / 1000;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [Colors.purple.shade100, Colors.blue.shade100],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Rewards Progress',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 16),
          LinearProgressIndicator(
            value: progress,
            backgroundColor: Colors.white.withOpacity(0.3),
            valueColor: AlwaysStoppedAnimation<Color>(
              Theme.of(context).primaryColor,
            ),
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '$points points',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              Text(
                'Next tier: $nextTier',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ],
          ),
        ],
      ),
    );
  }
}